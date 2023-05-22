 
import { prisma } from "../../utils/prisma";
 
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
 
/* 
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
} */