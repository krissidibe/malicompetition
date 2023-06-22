import { getServerSession } from "next-auth";
import UserProfile from './user'
import {
  HomeIcon,
  BookOpenIcon,
  UserIcon,
  AcademicCapIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Home() {
  const session = await getServerSession(authOptions)
 // const res = await fetch(`${process.env.BASE_URL}/api/user/candidature?id=${session?.user.email}`,{next:{revalidate:0}})


  const res = await fetch(`${process.env.BASE_URL}/api/user/author`, {
    body: JSON.stringify({
      email: session?.user.email,
      type: "user",
    }),
   headers:{
    "Content-type":"application/json"
   },
    method: "POST",
  });


  const data: any = await res.json();  
 
  return (
    <div className="flex flex-col">
       <p>{JSON.stringify(data)}</p>
    
       
    <UserProfile data={data}/>
      
    </div>
  );
}

export default Home;
 
