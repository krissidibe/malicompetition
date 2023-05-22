import React from "react";
import { prisma } from "../../../../../utils/prisma";
import CompetitionCardComponent from "@/components/CompetitionCardComponent";
import Link from "next/link";
import parse from "html-react-parser";
import { notFound } from "next/navigation";
import ButtonComponent from "../../../../../components/ButtonComponent";
export default async function CompetitionItem({
  params,
}: {
  params: { competitionId: string };
}) {
  const data = await prisma.competition.findFirst({
    where: {
      id: params.competitionId,
    },
  });

  const statutData = [
    { name: "Brouillon", code: "0", color:"text-black" },
    { name: "Ouvert", code: "1", color:"text-green-500" },
    { name: "Fermé", code: "2", color:"text-orange-500" },
    { name: "Suspendu", code: "3", color:"text-red-500" },
  ];
  
  if (!data) {
    return notFound();
  }

  return (
    <div className="flex flex-col">
      <div className="w-full mb-6 rounded-lg h-1/2 bg-slate-600 ">
        <picture>
          <img
            src={"https://picsum.photos/300/200?random=1"}
            alt="image"
            className="object-cover w-full max-h-[310px] md:max-h-[410px]  rounded-lg"
          />
        </picture>
      </div>
      <h1 className="w-full pb-2 mb-4 border-b-2">{data?.title}</h1>
      <div className="flex flex-col items-center p-4 mb-4 rounded-lg md:items-end bg-slate-100">
      <span className={`text-[14px]  text-gray-500  ${statutData[parseInt(data.statut)].color}  `}>
          Etat du concours :   {statutData[parseInt(data.statut)].name}
        </span>
        <span className="text-[14px]  text-gray-500   ">
          Date : du {new Date(data.startDateAt).toLocaleDateString("fr-FR")} au{" "}
          {new Date(data.endDateAt).toLocaleDateString("fr-FR")}
        </span>
        <span className="text-[14px]  text-gray-500  ">
          L'age est comprise entre : {data.ageMin} ans et {data.ageMax} ans
        </span>
      </div>
      <p className="text-[14px] text-gray-500">{parse(data?.content || "")}</p>
      <div className="flex items-end justify-end w-full my-4">
        {new Date(data.endDateAt) && (
          <ButtonComponent
            key={4}
            label="Postuler"
            className="md:w-[120px]"
            href=""
            full={true}
          />
        )}
        {/*     {!visible ? (
        <ButtonComponent
          key={4}
          label="Postuler"
          className="w-[130px]  "
          handleClick={() => setVisible((x) => (x = !x))}
          full={true}
        />
      ) : null} */}
      </div>
      {/*     {visible ? (
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none md:p-10 focus:outline-none">
          <div className="flex flex-col w-full h-full p-6 overflow-y-scroll bg-gray-100 rounded-lg shadow-xl md:max-w-7xl ">
            <h1 className="text-[24px] flex justify-between border-black  ">
              <span> Informations a renseigné</span>
              <XCircleIcon
                onClick={() => {
                  setVisible(false);
                }}
                className="w-10 cursor-pointer md:self-end hover:scale-110"
              />
            </h1>

            <div className="mt-2 mb-4 border-b border-solid  max-w-[320px]"></div>

            <p className="text-[14px] text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              at tincidunt neque. Pellentesque vitae commodo justo. Integer
              tempor dignissim tortor, eu elementum arcu dictum non
            </p>
            <div className="flex flex-col flex-1 space-x-0 md:space-x-8 md:flex-row ">
              <div className="flex flex-col w-full space-y-4 md:space-y-4 md:w-1/2">
                <InputComponent key={1} label="Nom" />
                <InputComponent key={1} label="Prénom" />
                <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:w-full md:space-x-4 ">
                  <InputComponent key={1} label="Date de naissance" />
                  <InputComponent key={1} label="Sexe" />
                </div>
                <InputComponent key={1} label="Numéro nina" />
                <InputComponent key={1} label="Certificat de nationalité" />
               
                <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:w-full md:space-x-4 ">
                <InputComponent key={1} label="Diplôme de nationalité" />
                <InputComponent key={1} label="Filiere" />
                </div>
              
              </div>
              <div className="flex flex-col w-full space-y-4 md:space-y-4 md:w-1/2">
                <InputComponent key={1} label="Spécialité" />
                <InputComponent key={1} label="Lieu d’optention du diplôme" />
                <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:w-full md:space-x-2 ">
                  <InputComponent key={1} label="Pays d’optention du diplôme" />
                  <InputComponent key={1} label="Numero du diplôme" />
                </div>
                <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:w-full md:space-x-4 ">
                  <InputComponent key={1} label="Def" />
                  <InputComponent key={1} label="Bac" />
                </div>
                <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:w-full md:space-x-4 ">
                  <InputComponent key={1} label="Licence" />
                  <InputComponent key={1} label="Master" />
                </div>
         
              </div>
            </div>
              {visible ? (
            <div className="flex justify-end mt-4 space-x-4">
                <ButtonComponent
                  key={4}
                  label="Retour"
                  className="w-[130px]  border-green-500 text-green-500 "
                  handleClick={() => setVisible(false)}
                  full={false}
                />
                <ButtonComponent
                  key={4}
                  label="Postuler"
                  className="w-[130px]  "
                  handleClick={() => setVisible((x) => (x = !x))}
                  full={true}
                />
                 </div>
              ) : null}
           
          </div>
        </div>
      </>
    ) : null} */}
    </div>
  );
}
