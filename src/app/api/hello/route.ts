import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

 

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    console.log("GET REQUEST");
    console.log(searchParams.get("name"));
    return new Response(JSON.stringify({ data: [{id:"1"},{id:"2"}]}),{
      status:200
    });
  }
  