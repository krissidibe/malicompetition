"use client"
import React  from "react";
import CompetitionCardComponent from "../../../../components/CompetitionCardComponent";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import CompetitionList from "./CompetitionList";
import SearchComponent from "./SearchComponent";

function Competitions() {
 // const [search, setSearch] = useState("")

  return (
    <div className="flex flex-col">
     <SearchComponent/>

      <div className="flex flex-col flex-wrap items-center w-full md:flex-row ">
      {/* @ts-ignore */}
       
      <CompetitionList  /> 
      </div>
    </div>
  );
}

export default Competitions;
