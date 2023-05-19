"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import {prima} from '../utils/prisma'
import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
 
const inter = Inter({ subsets: ["latin"] });

const Home =() => {
  
 
  const myLoader = () => {

    console.log("notes");
    

    return `https://www.afro-impact.com/wp-content/uploads/2022/01/meilleure-universite-africaine-.jpg`;
  };
  return (
    <div className="flex flex-1 w-screen h-screen bg-black ">
      <div className="flex flex-col items-center justify-between w-full h-full p-10 md:w-1/2 overscroll-y-auto bg-gray-50">
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
        <div className="md:min-w-[380px] max-w-[353px]  justify-center space-y-5 ">
          <p className="text-[24px]">Connectez-vous à votre compte</p>
          <InputComponent
            key={1}
            label="Email"
            Icon={EnvelopeIcon}
            withIcon={true}
          />
          <InputComponent
            key={2}
            label="Mot de passe"
            obscureInput={true}
            Icon={LockClosedIcon}
            withIcon={true}
          />
          <div className="flex w-full space-x-4 ">
            <ButtonComponent
       
              key={3}
              label="S'inscrire"
              href={"/signin"}
            />

            <ButtonComponent
              key={4}
              label="Se connecter"
              href={"/user"}
              full={true}
            />
          </div>
        </div>
        <p className="text-[11px] text-gray-500 max-w-[520px] text-center mt-10 mb-[100px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          tincidunt neque. Pellentesque vitae commodo justo. Integer tempor
          dignissim tortor, eu elementum arcu dictum non. at tincidunt neque.
          Pellentesque vitae commodo justo. Integer tempor dignissim{" "}
        </p>
      </div>

      

      <div className="flex flex-col items-center justify-between hidden w-1/2 h-full md:block bg-red-50">
        <Image
          className="object-cover w-full h-full"
          src="/images/meilleure-universite-africaine.jpg"
          //   loader={myLoader}

          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
export default Home
Home.layout = "Default";

/* export const getServerSideProps: GetServerSideProps  = async () => {
  // fetching data here
  const notes =  await  prima.user.findFirst();
  // Return the data as props
  return {
    props: {
    notes
    },
  };
}; */