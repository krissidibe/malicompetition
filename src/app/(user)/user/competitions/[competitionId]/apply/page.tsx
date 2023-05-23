"use client";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import React, { FormEvent, useState } from "react";

function Apply() {
  const [lastName, setLastName] = useState("lastName");
  const [firstName, setFirstName] = useState("firstName");
  const [date, setDate] = useState("date");
  const [sexe, setSexe] = useState("sexe");
  const [nina, setNina] = useState("");
  const [certificate, setCertificate] = useState("");
  const [diplome, setDiplome] = useState("");
  const [diplomeNumber, setDiplomeNumber] = useState("");
  const [placeOfGraduation, setPlaceOfGraduation] = useState("");
  const [countryOfGraduation, setCountryOfGraduation] = useState("");
  const [study, setStudy] = useState("");
  const [speciality, setSpeciality] = useState("");

  const createApply =(e:FormEvent) =>{
e.preventDefault()
alert("l")
  }

  return (
    <form onSubmit={createApply} className="flex flex-col w-full h-full p-6 overflow-y-scroll bg-gray-100 rounded-lg shadow-xl md:max-w-7xl ">
      <h1 className="text-[24px] flex justify-between border-black  ">
        <span> Informations a renseigné</span>
      </h1>

      <div className="mt-2 mb-4 border-b border-solid  max-w-[320px]"></div>

      <p className="text-[14px] text-gray-500 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
        tincidunt neque. Pellentesque vitae commodo justo. Integer tempor
        dignissim tortor, eu elementum arcu dictum non
      </p>
      <div className="flex flex-col flex-1 space-x-0 md:space-x-8 md:flex-row ">
        <div className="flex flex-col w-full space-y-4 md:space-y-4 md:w-1/2">
          <InputComponent
            value={lastName}
            inputType="text"
            readonly={true}
            key={1}
            label="Nom"
          />
          <InputComponent
            value={firstName}
            inputType="text"
            readonly={true}
            key={2}
            label="Prénom"
          />
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:w-full md:space-x-4 ">
            <InputComponent
              value={date}
              inputType="text"
              readonly={true}
              key={3}
              label="Date de naissance"
            />
            <InputComponent
              value={sexe}
              inputType="text"
              readonly={true}
              key={4}
              label="Sexe"
            />
          </div>
          <InputComponent
            value={nina}
            handleChange={(e) => setNina((x) => (x = e.target.value))}
            key={5}
            label="Numéro nina"
          />
          <InputComponent
            value={certificate}
            handleChange={(e) => setCertificate((x) => (x = e.target.value))}
            key={6}
            label="Certificat de nationalité"
          />

          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:w-full md:space-x-4 ">
            <InputComponent
              value={diplome}
              handleChange={(e) => setDiplome((x) => (x = e.target.value))}
              key={7}
              label="Diplôme de nationalité"
            />
            <InputComponent
              value={study}
              handleChange={(e) => setStudy((x) => (x = e.target.value))}
              key={8}
              label="Filiere"
            />
          </div>
        </div>
        <div className="flex flex-col w-full space-y-4 md:space-y-4 md:w-1/2">
          <InputComponent
            value={speciality}
            handleChange={(e) => setSpeciality((x) => (x = e.target.value))}
            key={9}
            label="Spécialité"
          />
          <InputComponent
            value={placeOfGraduation}
            handleChange={(e) =>
              setPlaceOfGraduation((x) => (x = e.target.value))
            }
            key={10}
            label="Lieu d’optention du diplôme"
          />
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:w-full md:space-x-2 ">
            <InputComponent
              value={countryOfGraduation}
              handleChange={(e) =>
                setCountryOfGraduation((x) => (x = e.target.value))
              }
              key={11}
              label="Pays d’optention du diplôme"
            />
            <InputComponent
              value={diplomeNumber}
              handleChange={(e) =>
                setDiplomeNumber((x) => (x = e.target.value))
              }
              key={12}
              label="Numero du diplôme"
            />
          </div>
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:w-full md:space-x-4 ">
            <InputComponent key={13} label="Def" />
            <InputComponent key={14} label="Bac" />
          </div>
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:w-full md:space-x-4 ">
            <InputComponent key={1} label="Licence" />
            <InputComponent key={1} label="Master" />
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end mt-4 space-x-4 md:self-end md:w-1/2">
        <ButtonComponent
          key={4}
          label="Retour"
          className="w-[130px]  border-green-500 text-green-500 "
          full={false}
        />
        <ButtonComponent
          key={4}
          label="Postuler"
          className="w-[130px]  "
          type="submit"
          full={true}
        />
      </div>
    </form>
  );
}

export default Apply;
