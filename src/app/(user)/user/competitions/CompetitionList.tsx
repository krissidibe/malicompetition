import { FunctionComponent } from "react";
import { Board } from "../../../../../typings";

 
const getCompetition = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/hello`);
  const data = await res.json();
  return data;
};

const CompetitionList = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/hello`,{next:{revalidate:10}});
  const datas = await res.json();
  return (
    <div>
    {JSON.stringify(datas)}
    </div>
  );
};

export default CompetitionList;
