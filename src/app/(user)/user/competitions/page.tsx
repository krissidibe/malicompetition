import React  from "react";
import CompetitionCardComponent from "../../../../components/CompetitionCardComponent";
import {prisma} from '../../../../utils/prisma'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
 
import SearchComponent from "./SearchComponent";


type Competition = {
  id: string;
 
};


async function Competitions() {
 // const [search, setSearch] = useState("")
/*  const res = await fetch(`${process.env.BASE_URL}/api/user/competition`,{next:{revalidate:1}})
 const datas: Competition[] = await res.json(); */
 const datas = await prisma.competition.findMany({
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
  return (
    <div className="flex flex-col">
     <SearchComponent/>

      <div className="flex flex-col flex-wrap items-center w-full md:flex-row ">
 
      <div className="grid items-center w-full sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 md:flex-row">
       {datas.map((data) => (
           
           <CompetitionCardComponent
           key={data.id}
           data={data}
           imageUrl={`https://picsum.photos/300/200?random=${data.id}`}
         />
    ))}  
    </div>
      </div>
    </div>
  );
}

export default Competitions;
