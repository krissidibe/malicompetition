import React, { useState } from "react";
import ButtonComponent from "../../../components/ButtonComponent";
import InputComponent from "../../../components/InputComponent";
import { XCircleIcon } from "@heroicons/react/24/solid";

ShowCompetition.layout = "Admin";
function ShowCompetition() {
  const [visible, setVisible] = useState(false);
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
      <h1 className="w-full pb-2 mb-4 border-b-2">{"Concours d'entrée"}</h1>
      <span className="self-end text-[12px] py-4 text-gray-500  pt-1 ">
        Date : 10/05/2023
      </span>
      <p className="text-[14px] text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt quam
        alias voluptatibus dolorem dolore rem quos soluta ratione excepturi
        doloribus porro neque, commodi suscipit tempore iusto dolorum eum in?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        sequi adipisci nemo aspernatur. Consequuntur obcaecati quam sint. Autem
        alias molestias at exercitationem placeat! Distinctio cupiditate ad
        molestias sequi expedita eum. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laborum vero ratione doloremque quasi Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Accusamus, dicta
        exercitationem officiis, sequi adipisci voluptates perferendis. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dicta
        exercitationem officiis, sequi adipisci voluptates perferendis. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dicta
        exercitationem officiis, sequi adipisci voluptates perferendis. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Accusamus, veniam
        tenetur aliquid facere ratione ex magni neque dolores, libero animi
        explicabo iste? Quas repudiandae eveniet quidem provident, ipsa facere
        maiores.
      </p>
      <div className="flex items-end justify-end w-full my-4">
        {!visible ? (
          <ButtonComponent
            key={4}
            label="Postuler"
            className="w-[130px]  "
            handleClick={() => setVisible((x) => (x = !x))}
            full={true}
          />
        ) : null}
      </div>
      {visible ? (
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
                    className="max-w-[130px]  "
                    handleClick={() => setVisible((x) => (x = !x))}
                    full={true}
                  />
                   </div>
                ) : null}
             
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ShowCompetition;
