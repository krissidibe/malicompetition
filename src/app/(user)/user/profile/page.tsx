"use client";
import React, { FormEvent,useState, useEffect ,useRef} from "react";
import InputComponent from "../../../../components/InputComponent";
import ButtonComponent from "../../../../components/ButtonComponent";
import { useRouter } from "next/navigation";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import ModalComponent from "@/components/ModalComponent";

function Profile() {
  const router = useRouter();
  const toast = useRef<Toast>(null);

  const show = () => {
    toast.current?.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  };
  const createUser = async (e: FormEvent) => {
    e.preventDefault()
    const res = await fetch(`/api/user`, {
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        number,
        sexe,
      }),
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "PATCH",
    });
    const data = await res.json();
    console.log(data);
    
   if(data.user){
    setShowModal((x) => (x = true));
    setMessage(data.message);
    setFirstName(data.user.firstName);
    setLastName(data.user.lastName);
    setEmail(data.user.email);
    setNumber(data.user.number);
    setSexe(data.user.sexe);
   }
  };


  // @ts-ignore


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [sexe, setSexe] = useState("");
 
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const getUser = async (email: String) => {
    const res = await fetch(`/api/user`, {
      body: JSON.stringify({
       email:email,
        type:"user"
      }),
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
    });
    const data = await res.json();
    console.log(data)
    setFirstName(data.user.firstName);
    setLastName(data.user.lastName);
    setEmail(data.user.email);
    setNumber(data.user.number);
    setSexe(data.user.sexe);
  };

  useEffect(() => {
    let user = JSON.parse(window.sessionStorage.getItem("user") || "" );
    getUser(user.email)

    return () => {};
  }, []);

  return (
    <div className="inset-0 ">
        {showModal && (
        <ModalComponent
          rightButtonLabel="Retour"
          rightButtonAction={() => setShowModal((x) => (x = false))}
          content={message}
          title={"Message"}
        />
      )}
      <form
        onSubmit={createUser}
        className="flex flex-col w-full h-full p-6 overflow-y-scroll bg-gray-100 rounded-lg shadow-sm "
      >
        <h1 className="text-[24px] flex justify-between border-black  ">
          <span> Informations a renseigné</span>
        </h1>

        <div className="mt-2 mb-4 border-b border-solid  max-w-[320px]"></div>

        <p className="text-[14px] text-gray-500 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          tincidunt neque. Pellentesque vitae commodo justo. Integer tempor
          dignissim tortor, eu elementum arcu dictum non
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          <picture className="self-center w-32 h-32 my-4 bg-white rounded-full shadow-md md:self-start">
            <img
              src={"https://picsum.photos/300/200?random=10"}
              alt="image"
              className="object-cover w-full h-full rounded-lg rounded-t-lg white"
            />
          </picture>
          <div className="flex flex-col space-y-2 md:maw-w-[200px] mb-2">
            <ButtonComponent
              key={4}
              label="Changer la photo"
              className="w-[130px] py-2 my-2 md:my-0   "
              // handleClick={() => setVisible((x) => (x = !x))}
              full={false}
            />
            <p className="text-[12px] pt-2 text-gray-500">
              {"Max 1mo format (jpg,png)"}
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-1 space-x-0 md:space-x-8 md:flex-row ">
          <div className="flex flex-col w-full space-y-4 md:space-y-4 md:w-1/2">
            <InputComponent
              value={firstName}
              handleChange={(e) => {
                setFirstName(e.target.value);
              }}
              key={1}
              label="Nom"
            />
            <InputComponent
              value={lastName}
              handleChange={(e) => {
                setLastName(e.target.value);
              }}
              key={1}
              label="Prénom"
            />
            <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:w-full md:space-x-4 ">
              <InputComponent key={1} label="Date de naissance" />
              <InputComponent
                value={sexe}
                handleChange={(e) => {
                  setSexe(e.target.value);
                }}
                key={1}
                label="Sexe"
              />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-4 md:space-y-4 md:w-1/2">
            <InputComponent key={1} label="Numéro nina" />
            <InputComponent key={1} label="Certificat de nationalité" />

            <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:w-full md:space-x-2 ">
              <InputComponent
                value={number}
                handleChange={(e) => {
                  setNumber(e.target.value);
                }}
                key={1}
                label="Numero du téléphone"
              />
              <InputComponent key={1} label="Adresse complete" />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4 md:w-[230px] items-end  space-x-4">
          <ButtonComponent
            type="submit"
            key={4}
            label="Enregistré"
            className="w-[130px]  "
            // handleClick={() => setVisible((x) => (x = !x))}
            full={true}
          />
        </div>
      </form>
    </div>
  );
}

export default Profile;
