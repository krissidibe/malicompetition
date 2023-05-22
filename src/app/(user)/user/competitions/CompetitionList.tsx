import React from "react";
import { prisma } from "../../../../utils/prisma"; 
import CompetitionCardComponent from "@/components/CompetitionCardComponent";
import Link from "next/link";
import { revalidateTag } from 'next/cache'
import { Competition } from "../../../../../typings";
const getAllDatas = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/user/competition/`,{next:{revalidate:5}});
  const datas:Competition[] = await res.json()
 
  
  return datas;
};

export default async function CompetitionList() {
 
  const datas = await  getAllDatas()
  console.log(datas);
  
   {/* @ts-ignore */}
  return (
   <>
   {/*  <div className="grid items-center w-full sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 md:flex-row">
       {datas.map((data) => (
      <Link  key={data.id} href="competitions/1">
            
        <CompetitionCardComponent
          key={data.id}
          data={data}
          imageUrl={`https://picsum.photos/300/200?random=${data.id}`}
        />
      </Link>
    ))}  
    </div>
     */}</>
  );
}
