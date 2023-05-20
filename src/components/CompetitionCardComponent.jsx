"use client"

import React,{useState,useEffect} from "react";
import { ArrowRightCircleIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'
import {   convertFromRaw,convertToRaw } from "draft-js";
import parse from 'html-react-parser'; 
function CompetitionCardComponent({imageUrl,href,data}) {
 //console.log(JSON.parse(data.content).blocks);

 

  return (
    <div    passHref legacyBehavior className="flex flex-col cursor-pointer rounded-lg   h-[360px] shadow-md mr-4 mt-4 ">
      <div className="w-full rounded-t-lg h-1/2 bg-slate-600 ">
        
     <picture>
     <img src={imageUrl} alt="image" className="object-cover w-full h-full rounded-t-lg" />
     </picture>
      </div>
       
    <div className="flex items-center justify-between ">
    <span className="self-start text-[15px] line-clamp-1 font-semibold px-4 pt-2 text-black flex-1">{data.title}</span>
        <span className="self-end text-[12px] px-4 pt-2 mb-2 text-green-500">{JSON.parse(data.statut).name}</span>
    </div>
      <p className="text-[13px]   text-gray-500 flex-1 px-4 mb-3  line-clamp-3  ">
       {parse(data.content) }.
      </p>
      <span className="self-end text-[13px] px-4 text-gray-500 font-semibold border-t-2 pl-10 pt-1 mr-0"><span className="font-normal" >Date de fin</span> :  {new Date(data.endDateAt).toLocaleDateString("fr-FR")}</span>
      <span className="self-start text-[12px] px-4 py-1 text-blue-500 flex items-center mb-4">Voir plus  <ArrowRightCircleIcon className="w-6 ml-2"/> </span>
    </div>
  );
}

export default CompetitionCardComponent;
