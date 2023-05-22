import ButtonComponent from "../../../../../components/ButtonComponent";
import InputComponent from "../../../../../components/InputComponent";
import { XCircleIcon } from "@heroicons/react/24/solid";
import CompetitionItem from "./CompetitionItem";
import { Suspense } from "react";
 
function ShowCompetition({params}:{
  params:{
    competitionId: string
  }
}) {
 // const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col">
        {/* @ts-ignore */}
  <CompetitionItem  params={params}  />

    </div>

  );
}

export default ShowCompetition;
