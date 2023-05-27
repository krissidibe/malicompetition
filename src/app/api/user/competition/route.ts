import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../utils/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest, res: NextResponse) {

  /* const {
    title,
    statut,
    startDateAt,
    endDateAt,
    valueContent,
    image,
    ageMax,
    ageMin,
  } = await req.json();
 */

  const data = await prisma.candidature.create({
    data: {
      title: "title",
      statut: "statut",
      firstName: "firstName",
      lastName: "lastName",
      birthDate: new Date(Date.now()),
      sexe: "sexe",
      nina: "nina",
      certificat: "certificat",
      diplome: "diplome",
      diplomeNumber: "diplomeNumber",
      placeOfGraduation: "placeOfGraduation",
      countryOfGraduation: "countryOfGraduation",
      study: "study",
      speciality: "speciality",
      authorId: "cli4xt2bo00006wyl3gs6tr2q",
      competitionId: "cli5lzbmi00046w5lae3ts4yy",
    },
  });
  return new Response(
    JSON.stringify({ data: data, message: "La candidature est créer" })
  );
}
