import {NextRequest, NextResponse} from 'next/server'
import { prima } from "../../../utils/prisma";


export async function GET(req: NextRequest){
    const {searchParams}= new URL(req.url)
    console.log("GET REQUEST");
    console.log(searchParams.get("name"));
 return new Response(JSON.stringify({name : "john"}))
}

export async function POST(req: NextRequest,res:NextResponse){
  const { email, firstName, lastName, number, sexe, password ,type}  = await req.json();

  if(type == "create"){
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
        res.status
       /*  res.status(200).json(data); */
      } catch (error) {
  /*       res.status(500).json(error); */
      }
  }else{
    
    try {
      const data =  await prima.user.findFirst({
        where:{
          email:{
            equals: email
          }
        }
      })
      return new Response(JSON.stringify({user:data,error : "succes"}))
      } catch (error) {
        return new Response(JSON.stringify({error : "error"}))
  /*       res.status(500).json(error); */
      }
    
  
  }


   }