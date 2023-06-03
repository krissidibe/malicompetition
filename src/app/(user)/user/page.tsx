import { getServerSession } from "next-auth";
import CardMiniComponent from "../../../components/CardMiniComponent";
import DataUserCandidatureComponent from "../../../components/DataUserCandidatureComponent";
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
  const res = await fetch(`${process.env.BASE_URL}/api/user/candidature?id=${session?.user.email}`,{next:{revalidate:0}})
  const data: any = await res.json();  
 
  return (
    <div className="flex flex-col">
      <div className="flex pb-10 space-x-4 ">
 
        <CardMiniComponent
          key={1}
          number={"21"}
          label={"Concours ouverts"}
          Icon={BookOpenIcon}
        />
        <CardMiniComponent
          key={2}
          number={"21"}
          label={"Concours ouverts"}
          Icon={AcademicCapIcon}
        />
      </div>

      <div className="pb-2 border-b-2">
        <p>Liste des candicatures</p>
      </div>
       
    {/*   <DataUserCandidatureComponent datas={data.candidatures}  /> */}
      
    </div>
  );
}

export default Home;
 
