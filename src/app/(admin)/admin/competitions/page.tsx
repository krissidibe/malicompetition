
import ButtonComponent from "@/components/ButtonComponent";
import MagnifyingGlassIcon from "@/components/ButtonComponent";
import React from "react";
import { AiFillMessage } from "react-icons/ai";
import CompetitionList from "./CompetitionList";
function Competition() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center pb-2 mb-8 border-b-2 ">
        <div className="flex-1">Liste des concours</div>{" "}
        <div className="flex px-4 bg-gray-100 rounded-md md:w-[310px]">
          <input
            className="w-full p-1 px-3   h-[45px] bg-gray-100  outline-none"
            placeholder="Rechercher"
          />
         
        </div>
         <ButtonComponent
          href="/admin/competitions/create"
          label="Ajouter"
          className="max-w-[200px] ml-4"
        />
      </div>
 
       {/* @ts-ignore */}
      <CompetitionList/>
    </div>
  );
}

export default Competition;
