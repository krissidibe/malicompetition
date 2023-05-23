import { FunctionComponent } from "react";
import { Board } from "../../../../../typings";
 import {prisma} from '../../../../utils/prisma'
import CompetitionCardComponent from "@/components/CompetitionCardComponent";
import Link from "next/link";

const CompetitionList = async () => {
  const datas = await prisma.competition.findMany({
    where:{
      statut:{
        in:["1","2"]
      }
    }
  })
  
  return (
    
    
     <div className="grid items-center w-full sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 md:flex-row">
       {datas.map((data) => (
      <Link  key={data.id} href="competitions/1">
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
