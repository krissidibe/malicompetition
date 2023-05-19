import {NextRequest} from 'next/server'



export async function GET(req: NextRequest){
    const {searchParams}= new URL(req.url)
    console.log("GET REQUEST");
    console.log(searchParams.get("name"));
 return new Response(JSON.stringify({name : "john"}))
}

export async function POST(){
    console.log("GET REQUEST");
   }