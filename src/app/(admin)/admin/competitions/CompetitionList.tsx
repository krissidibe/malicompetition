import { FunctionComponent } from "react";
import { Board } from "../../../../../typings";
 import {prisma} from '../../../../utils/prisma'
import CompetitionCardComponent from "@/components/CompetitionCardComponent";
import Link from "next/link";
 

 
   function getDatas() {
    return prisma.competition.findMany({
    orderBy:{
     createdAt:"desc"
    }
   })
  
}

const CompetitionList = async () => {
  
  
  const datas = await getDatas();
  return (
    
    
     <div className="grid items-center w-full sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 md:flex-row">
       {datas.map((data) => (
      <Link  passHref key={data.id} href={`/user/competitions/${data.id}`}>
           {/*  @ts-ignore */}
        <CompetitionCardComponent
          key={data.id}
          data={data}
          imageUrl={`https://picsum.photos/300/200?random=${data.id}`}
        />
      </Link>
    ))}  
    </div>
    
    
  );
};

export default CompetitionList;
