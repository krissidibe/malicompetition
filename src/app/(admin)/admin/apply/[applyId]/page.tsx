"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import parse from "html-react-parser";

function page() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const dataUser = searchParams.get("user");

  const result = JSON.parse(data!);
  const user = JSON.parse(dataUser!);
  const statutData = [
    { name: "Brouillon", code: "0", color: "text-black" },
    { name: "Ouvert", code: "1", color: "text-green-500" },
    { name: "Fermé", code: "2", color: "text-orange-500" },
    { name: "Suspendu", code: "3", color: "text-red-500" },
  ];

  return (
    <div className="flex flex-col h-full">
      <p className="pb-2 mb-10 font-semibold border-b-2">
        Les information sur la candidature
      </p>
      <div className="flex flex-1 h-full gap-6 ">
        <div className="w-full h-full p-4 overflow-y-scroll text-sm bg-gray-100 shadow-md md:w-1/2 scrollbar-hide">
          <h1 className="my-4 font-bold ">Information personnelle</h1>

          <div className="w-32 h-32 mb-4 bg-white rounded-full"></div>
          <div className="flex flex-col pb-4 space-y-4 border-b-2">
            <div className="flex justify-between space-x-4">
              <ItemUser label={"Nom"} value={user.firstName} />
              <ItemUser label={"Prénom"} value={user.lastName} />
            </div>
            <div className="flex justify-between space-x-4">
              <ItemUser
                label={"Date de naissance"}
                value={new Date(user.birthDate).toLocaleDateString("fr-Fr")}
              />
              <ItemUser label={"Sexe"} value={user.sexe} />
            </div>

            <div className="flex justify-between space-x-4">
              <ItemUser label={"Numero du téléphone"} value={user.number} />
              <ItemUser label={"Numero nina"} value={user.nina} />
            </div>
          </div>
          <h1 className="my-4 font-bold ">Les pieces jointes</h1>
        </div>
        <div className="w-full h-full p-4 overflow-y-scroll text-sm bg-gray-100 shadow-md md:w-1/2 scrollbar-hide">
          <h1 className="my-4 font-bold ">Information personnelle</h1>

           
           <div>Note :</div>
           <textarea className="w-full p-4 my-4 outline-none h-1/2" ></textarea>
        </div>
      </div>
    </div>
  );

  function ItemUser({ label, value }: any) {
    return (
      <div className="flex justify-between w-full p-4 bg-white rounded-md">
        <p className="flex-1 font-bold text-md">{label}</p>
        <p className="font-bold text-md">{value}</p>
      </div>
    );
  }
}

export default page;
