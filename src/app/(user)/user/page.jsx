"use client"
import React,{ useRef,useState ,useEffect}  from "react";
import CardMiniComponent from "../../../components/CardMiniComponent";
import DataUserCandidatureComponent from "../../../components/DataUserCandidatureComponent";
import {
  HomeIcon,
  BookOpenIcon,
  UserIcon,
  AcademicCapIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";

function Profile() {

 
  return (
    <div className="flex flex-col">
      <div className="flex pb-10 space-x-4 ">
        <CardMiniComponent
          key={1}
          number={"21"}
          label={"Concours ouverts"}
          Icon={BookOpenIcon}
        />
        <CardMiniComponent
          key={2}
          number={"21"}
          label={"Concours ouverts"}
          Icon={AcademicCapIcon}
        />
      </div>

      <div className="pb-2 border-b-2">
        <p>Liste des candicatures</p>
      </div>
       
      <DataUserCandidatureComponent   />
      
    </div>
  );
}

export default Profile;

Profile.layout = "User";
