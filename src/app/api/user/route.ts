import {NextRequest, NextResponse} from 'next/server'
import { prima } from "../../../utils/prisma";


export async function GET(req: NextRequest){
    const {searchParams}= new URL(req.url)
    console.log("GET REQUEST");
    console.log(searchParams.get("name"));
 return new Response(JSON.stringify({name : "john"}))
}

export async function POST(req: NextRequest,res:NextResponse){
  const { email, firstName, lastName, number, sexe, password }  = await req.json();
  console.log("POST Request =>" )
  try {
    const data =  await prima.user.create({
        data: {
          firstName,
          lastName,
          email,
          number,
          sexe,
          password,
        },
      });
      console.log("log");
      
     /*  res.status(200).json(data); */
    } catch (error) {
/*       res.status(500).json(error); */
    }
   }