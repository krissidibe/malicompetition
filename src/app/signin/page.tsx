"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import InputComponent from "../../components/InputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import Link from "next/link";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { error } from "console";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
 
export default function Signin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [sexe, setSexe] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVeirfy, setPasswordVerify] = useState("");

  const router = useRouter();
  const createUser = async () => {
   const type = "create";
    await fetch(`/api/user`, {
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        number,
        sexe,
        password,
        type
      }),
      headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      method: "POST",
    })
      .then((value) => {
        if (value.status == 200) {
          router.push(`/user`);
        }else{
          console.log("email existe deja");
        }
      })
      .catch((error) => {
        console.log("Error");
      })
       
  };

  return (
    <div className="flex flex-1 w-screen h-screen bg-black ">
      <div className="flex flex-col items-center justify-between w-full h-full p-10 overflow-y-scroll md:w-1/2 bg-gray-50">
        <div className="md:min-w-[450px] w-[353px] items-center flex space-x-2">
          <Image
            src="/images/logo.png"
            alt="me"
            className=" left-20"
            width="64"
            height="64"
          />
          <p>Projet Name</p>
        </div>
        <Link
          href="/"
          className="text-[14px] md:min-w-[450px] w-[353px] mt-6 mr-4"
        >
          {"<-"} Retour
        </Link>
        <div className="md:min-w-[380px] max-w-[353px] flex-1 mt-2  justify-center space-y-2 ">
          <p className="text-[24px]">Inscription</p>
          <p className="text-[11px] text-gray-500 max-w-[520px] text-left border-t-2 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            tincidunt neque. Pellentesque vitae commodo justo. Integer tempor
            Pellentesque vitae Integer tempor
          </p>
          <div className="h-4"></div>
          <InputComponent
            value={lastName}
            handleChange={(e) => {
              setLastName(e.target.value);
            }}
            Icon={UserIcon}
            withIcon={true}
            key={1}
            label="Nom"
          />
          <InputComponent
            value={firstName}
            handleChange={(e) => {
              setFirstName(e.target.value);
            }}
            Icon={UserIcon}
            withIcon={true}
            key={2}
            label="Prénom"
          />
          <InputComponent
            value={email}
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
            Icon={EnvelopeIcon}
            withIcon={true}
            key={3}
            label="Email"
            inputType="email"
          />

          <div className="flex flex-col w-full space-y-2 md:space-x-4 md:space-y-0 md:flex-row">
            <InputComponent
              value={number}
              handleChange={(e) => {
                setNumber(e.target.value);
              }}
              Icon={PhoneIcon}
              withIcon={true}
              key={4}
              label="Numero de téléphone"
            />
            <InputComponent
              value={sexe}
              handleChange={(e) => {
                setSexe(e.target.value);
              }}
              Icon={InformationCircleIcon}
              withIcon={true}
              key={5}
              label="Sexe"
              className="w-2/3"
            />
          </div>
          <InputComponent
            value={password}
            handleChange={(e) => {
              setPassword(e.target.value);
            }}
            Icon={LockClosedIcon}
            withIcon={true}
            key={6}
            label="Mot de passe"
            inputType="password"
          />
          <InputComponent
            value={passwordVeirfy}
            handleChange={(e) => {
              setPasswordVerify(e.target.value);
            }}
            Icon={LockClosedIcon}
            withIcon={true}
            key={7}
            inputType="password"
            label="Confirmer le mot de passe"
          />
          <div className="flex w-full mt-8 space-x-4">
            <div className="w-full"></div>
            <ButtonComponent
              handleClick={createUser}
              key={8}
              label="Créer le compte"
              full={true}
              className="w-1/2 mt-4"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between hidden w-1/2 h-full md:block bg-red-50">
        <Image
          className="object-cover w-full h-full"
          // loader={myLoader}
          src="/images/meilleure-universite-africaine.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
