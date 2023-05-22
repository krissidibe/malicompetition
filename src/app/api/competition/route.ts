import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../utils/prisma";
import { NextApiRequest ,NextApiResponse} from "next";
 
 

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  try {
    const datasPrisma = await prisma.competition.findMany({
      where: {
        statut: {
          in: ["1", "2"],
        },
      },
      orderBy: [
        {
          createdAt: "desc",
        },
        {
          title: "desc",
        },
      ],
    });
    //  console.log(searchParams.get("name"));
    res.status(200).json({ data:datasPrisma }); 
    
  } catch (error) {
    res.status(500).json({ message: 'Error' }); 
  }
}