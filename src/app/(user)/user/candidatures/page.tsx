import React from 'react'
import DataUserCandidatureComponent from '../../../../components/DataUserCandidatureComponent'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
 
async function Candidatures() {
 
  const res = await fetch(`${process.env.BASE_URL}/api/user/candidature`,{next:{revalidate:0}})
  const data: any = await res.json();  
  return (
    <div className="flex flex-col" >
        <div className="flex items-center pb-2 mb-0 border-b-2 ">
        <p className="flex-1">Liste des Candidatures</p>{" "}
        <div className="flex px-4 bg-gray-100 rounded-md md:max-w-[310px] max-w-[200px] ">
          <input
            className="w-full p-1 px-3   h-[45px] bg-gray-100  outline-none"
            placeholder="Rechercher"
          />
          <MagnifyingGlassIcon className="w-6 text-black " /> 
        </div>
      </div>
 
 
  
    {/*   <DataUserCandidatureComponent datas={data.candidatures}  /> */}
    </div>
  )
}

export default Candidatures