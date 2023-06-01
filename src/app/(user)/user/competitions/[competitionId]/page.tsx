import ButtonComponent from "../../../../../components/ButtonComponent";
import InputComponent from "../../../../../components/InputComponent";
import { XCircleIcon } from "@heroicons/react/24/solid";
import CompetitionItem from "./CompetitionItem";
import { Suspense } from "react";
import { prisma } from "../../../../../utils/prisma";
async function ShowCompetition({params}:{
  params:{
    competitionId: string
  }
}) {

  const data = await prisma.competition.findFirst({
    where: {
      id: params.competitionId,
    }});
 // const [visible, setVisible] = useState(false);
  return (
  
    <div className="flex flex-col">
     
        {/* @ts-ignore */}
  <CompetitionItem  params={params}  />
        {/* @ts-ignore */}
  {new Date(data.endDateAt) > new Date(Date.now()) ? (
    
          <ButtonComponent
            key={4}
            label="Postuler"
            className="md:w-[120px]"
            
          href={`/user/competitions/${data?.id}/apply/?id=${data?.id}`}  
            full={true}
          />
        ): (
          <p>La date du concours est depassé </p>
        )}
    </div>

    

  );
}

export default ShowCompetition;
