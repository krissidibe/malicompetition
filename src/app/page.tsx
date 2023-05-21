"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import ModalComponent from "../components/ModalComponent";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { signIn } from "next-auth/react";
import { GetServerSideProps, NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/navigation";
const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const [password, setPassword] = useState("");

  const loginUser = async (e: FormEvent) => {
    e.preventDefault();

    /*     const form = new FormData(e.target as HTMLFormElement);

   const val =  await signIn('credentials', {
      email: form.get('email'),
      password: form.get('password'),
      callbackUrl: '/api/user',
    });
  
    alert(val) 
    return
    */
    const res = await fetch("/api/user", {
      body: JSON.stringify({
        email,
        password,
         firstName:"firstName", lastName:"lastName", number:"number", sexe:"sexe", type:"type"
      }),
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    const data = await res.json();

    if (!data.user) {
      setShowModal((x) => (x = true));
      setMessage(data.message);
    } else {
      e.preventDefault();
      console.log(data.user);
      sessionStorage.setItem("user", JSON.stringify(data.user));
      router.push("/user");

      return;
    }
  };
  return (
    <div className="flex flex-1 w-screen h-screen bg-black ">
      {showModal && (
        <ModalComponent
          rightButtonLabel="Retour"
          rightButtonAction={() => setShowModal((x) => (x = false))}
          content={message}
          title={"Message"}
        />
      )}
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
        <form
          onSubmit={loginUser}
          className="md:min-w-[380px] max-w-[353px]  justify-center space-y-5 "
        >
          <p className="text-[24px]">Connectez-vous à votre compte</p>
          <InputComponent
            key={1}
            label="Email"
            Icon={EnvelopeIcon}
            withIcon={true}
            value={email}
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputComponent
            key={2}
            label="Mot de passe"
            obscureInput={true}
            Icon={LockClosedIcon}
            withIcon={true}
            value={password}
            inputType="password"
            handleChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="flex w-full space-x-4 ">
            <ButtonComponent key={3} label="S'inscrire" href={"/signin"} />

            <ButtonComponent
              key={4}
              type="submit"
              label="Se connecter"
              //  href={"/user"}
              full={true}
            />
          </div>
        </form>
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
};
export default Home;
