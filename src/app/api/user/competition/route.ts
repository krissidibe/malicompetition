import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../utils/prisma";
import bcrypt from "bcryptjs";
import { NextApiResponse } from "next";

export async function GET(req: NextRequest,res: NextApiResponse) {
  // const { searchParams } = new URL(req.url);

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
  res.status(200).json(datasPrisma);
  //  console.log(searchParams.get("name"));
  //return new Response(JSON.stringify(datasPrisma));
}
