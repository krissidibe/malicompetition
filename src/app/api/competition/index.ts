import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../utils/prisma";
import { NextApiRequest ,NextApiResponse} from "next";
 
 

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'GET') {
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
      res.status(200).json({ name: 'John Doe' }); 
      
    } catch (error) {
      res.status(500).json({ message: 'Error' }); 
    }
  } 
 else if (req.method === 'POST') {
    // Process a POST request
  } 
  
  else {
    // Handle any other HTTP method
  }
}