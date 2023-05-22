import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../utils/prisma";
import bcrypt from "bcryptjs";
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  console.log("GET REQUEST");
  console.log(searchParams.get("name"));
  return new Response(JSON.stringify({ name: "john" }));
}

export async function POST(req: NextRequest, res: NextResponse) {
  const {
    title,
    statut,
    startDateAt,
    endDateAt,
    valueContent,
    image,
    ageMax,
    ageMin,
  } = await req.json();
  
 const data = await  prisma.competition.create({
    data:{
      image: image,
        title: title,
        content:valueContent ,
        statut:statut.code,
        startDateAt: new Date(startDateAt),
        endDateAt: new Date(endDateAt),
        ageMin: parseInt(ageMin),
        ageMax: parseInt(ageMax),
    }
  })
  return new Response(
    JSON.stringify({ user: data, message: "Le concours est créer" })
  );
 
}
