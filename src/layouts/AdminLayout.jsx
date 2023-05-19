import React,{useState} from "react";
import { HandThumbDownIcon, Bars4Icon} from '@heroicons/react/24/solid'
import SideBarAdmin from "../components/SideBarAdmin";
function AdminLayout({ children }) {

  const [showMenu, setshowMenu] = useState(false);

  return (
    <div className="flex flex-1 w-full h-screen">
      <SideBarAdmin show={showMenu} handleClick={()=>{
          setshowMenu((x) => x = !x)
        }} />
      <div className="flex flex-col flex-1">
        <div className="w-full bg-slate-100  h-[70px] p-4  rounded-lg mt-2 flex shadow-md  items-center justify-end">
        <div onClick={()=>{
          setshowMenu((x) => x = !x)
        }} className="absolute cursor-pointer hover:text-blue-500 group left-10">
      { 
      !showMenu &&   <Bars4Icon  className={`w-6 h-6 md:hidden text-gray-500 group-hover:text-blue-500 transition-all ease-in-out  hover:text-blue-500 hover:scale-110 `}   />

      }
        </div>
         <div className="flex items-center"> 
         <p className="mr-4 text-sm">Admin</p>
         <picture  className="self-center w-12 h-12 bg-white rounded-full shadow-md md:self-start">
     <img src={"https://picsum.photos/300/200?random=10"} alt="image" className="object-cover w-full h-full rounded-lg rounded-t-lg white" />
     </picture>
        
         </div>
        </div>
        <div className="h-full p-4 overflow-y-scroll md:p-10 ">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
