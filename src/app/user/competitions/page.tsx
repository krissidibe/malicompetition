import React  from "react";
import CompetitionCardComponent from "../../../components/CompetitionCardComponent";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import CompetitionList from "./CompetitionList";

function Competitions() {
 // const [search, setSearch] = useState("")

  return (
    <div className="flex flex-col">
      <div className="flex items-center pb-2 mb-8 border-b-2 ">
        <p className="flex-1">Liste des concours</p>{" "}
        <div className="flex px-4 bg-gray-100 rounded-md md:w-[310px]">
          <input
         /*  value={search}
          onChange={(e)=> setSearch(e.target.value)} */
            className="w-full p-1 px-3   h-[45px] bg-gray-100  outline-none"
            placeholder="Rechercher"
          />
          <MagnifyingGlassIcon className="w-6 text-black " />
        </div>
      </div>
      {/* @ts-ignore */}
      <CompetitionList  /> 

      <div className="flex flex-col flex-wrap items-center w-full md:flex-row ">
        {/*         <Link href="competitions/1">
          <CompetitionCardComponent
            key={1}
            imageUrl={"https://picsum.photos/300/200?random=1"}
          />
        </Link>
       */}
      </div>
    </div>
  );
}

export default Competitions;
