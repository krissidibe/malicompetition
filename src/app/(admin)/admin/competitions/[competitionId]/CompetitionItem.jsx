"use client"
import React, { useState } from "react";
import ButtonComponent from "../../../../../components/ButtonComponent";
import InputComponent from "../../../../../components/InputComponent";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { EditorState,ContentState, convertFromRaw,convertToRaw } from "draft-js";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { AiFillPicture } from "react-icons/ai";
import { Dropdown } from "primereact/dropdown";
import { Calendar ,CalendarChangeEvent} from "primereact/calendar";
import { convertFromHTML,convertToHTML } from 'draft-convert';
import { redirect, useRouter } from "next/navigation";
  
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);


function EditorComponent({ value, handleChange }) {
  return (
    <div className="bg-[#F8F9FA] min-h-[500px]  mb-6 p-2 shadow-lg">
      <Editor
       editorState={value}    onEditorStateChange={newState => {
handleChange(newState)
      }}    />
    </div>
  );
}
function CompetitionItem({params,data}) {
 const router = useRouter()
  const [visible, setVisible] = useState(false);
  const [image, setImageUrl] = useState("image");
  const [title, setTitle] = useState(data.title);
  const [ageMax, setAgeMax] = useState(data.ageMax);
  const [ageMin, setAgeMin] = useState(data.ageMin);
 
  const [content, setContent] = useState(EditorState.createWithContent(convertFromHTML(data.content)));

  const statutData = [
    { name: "Brouillon", code: "0" },
    { name: "Ouvert", code: "1" },
    { name: "Fermé", code: "2" },
    { name: "Suspendu", code: "3" },
  ];
  const [statut, setStatutSelect] = useState( statutData[data.statut]);
  const [startDateAt, setStartDateAt] = useState(data.startDateAt);
  const [endDateAt, setEndDateAt] = useState (data.endDateAt); 


  const updateData = async (e) => {
    
   
    e.preventDefault()
   /*  alert(content.getCurrentContent())
    return */
   const valueContent = convertToHTML(content.getCurrentContent()); 
  const res =  await fetch(`/api/admin/competition`, {
      body: JSON.stringify({
        image,
        title,
        ageMax,
        ageMin,
        valueContent,
        startDateAt,
        endDateAt,
        statut,
        id:params.competitionId,
      }),
      headers: {
        "Content-type": "application/json",
      },
      method: "PUT",
    }) 

    const data = await res.json()
    if (data.user) {
      alert("le concours est modifier")
    }
   
  };


  const deleteData = async (e) => {
   
    e.preventDefault()
 
   /*  alert(content.getCurrentContent())
    return */
    const valueContent = convertToHTML(content.getCurrentContent()); 
  const res =  await fetch(`/api/admin/competition?id=${params.competitionId}`, {
  
      headers: {
        "Content-type": "application/json",
      },
      method: "DELETE",
    }) 

    const data = await res.json()
   
   
   if(data.user){
    alert("le concours est supprimer")
    router.replace("/admin/competitions")
    
   }
  };


  return (
    <form onSubmit={(e)=>updateData(e)} className="flex flex-col">
      <p className="mb-2 text-lg font-bold">Phtoto de couverture</p>
      <picture className="w-full cursor-pointer h-[300px] mb-6 bg-gray-100 flex  justify-center border items-center border-dashed do rounded-lg ">
        <AiFillPicture className="w-12 h-12" />
        {/*  {image == "" ? <div className="flex items-center justify-center" >
        </div> : <img
          src={"https://picsum.photos/300/200?random=1"}
          alt="image"
          className="object-cover w-full max-h-[310px] md:max-h-[410px]  rounded-lg"
        />   } */}
      </picture>
      <InputComponent
       key={1}
 
        label={"Titre"}
        value={title}
        handleChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <div className="flex w-full gap-4 my-4">
        <div className="flex flex-col w-full">
          <p className="text-[14px] text-gray-500 font-semibold mb-2  overflow-ellipsis">
            Statut
          </p>
          <Dropdown
            value={statut}
            onChange={(e) => setStatutSelect(e.value)}
            options={statutData}
            optionLabel="name"
            placeholder="Type de statut"
            className="w-full md:w-14rem"
          />
        </div>
      
      </div>
      <div className="flex w-full gap-4 my-2">
      <div className="flex gap-4 ">
          <div className="flex flex-col w-full">
            <p className="text-[14px] text-gray-500 font-semibold mb-2  overflow-ellipsis">
              Date debut
            </p>
            <div className="flex w-full card justify-content-center">
              <Calendar
                value={startDateAt}
                className="w-full"
                onChange={(e) =>  setStartDateAt(e.value)}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="text-[14px] text-gray-500 font-semibold mb-2  overflow-ellipsis">
              Date fin
            </p>
            <div className="flex w-full card justify-content-center">
              <Calendar
                value={endDateAt}
                className="w-full"
                onChange={(e) => setEndDateAt(e.value)}
              />
            </div>
          </div>
          
        </div>
        <div className="flex gap-4 ">
         
 
          <InputComponent
           key={2}
        label={"Age minimum"}
        value={ageMin}
        inputType="number"
        handleChange={(e) => {
          setAgeMin(e.target.value);
        }}/>
          <InputComponent
           key={3}
        label={"Age maximum"}
        value={ageMax}
        inputType="number"
        handleChange={(e) => {
          setAgeMax(e.target.value);
        }}/>
        </div>
      </div>
 
      <p className="text-[14px] text-gray-500 mt-8">
        <EditorComponent
          value={content}
          handleChange={ (v)=>setContent(v)}
        />
      </p>
 
      <div className="flex items-end justify-end w-full gap-2 my-4">
  
          <ButtonComponent
            key={4}
            label="Supprimer"
            className="max-w-[130px] bg-red-400 rounded-md "
           type="button"
           handleClick={deleteData}
            full={true}
          />
          <ButtonComponent
            key={4}
            label="Modifier"
            className="max-w-[130px]  "
           type="submit"
            full={true}
          />
    
      </div>
    </form>
  );
}

export default CompetitionItem;
