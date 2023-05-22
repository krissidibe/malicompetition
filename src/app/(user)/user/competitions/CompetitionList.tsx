import React from "react";
import { prisma } from "../../../../utils/prisma";
import CompetitionCardComponent from "@/components/CompetitionCardComponent";
import Link from "next/link";
const getAllDatas = async () => {
  const datas = await prisma.competition.findMany();
  return datas;
};

export default async function CompetitionList() {
  const datas = await prisma.competition.findMany({
    where: {
      statut: {
        in: ["1", "2"],
      },
    },
    orderBy: [
      {
        createdAt: "desc",
      },
      {
        title: "desc",
      },
    ],
  });
  return (
    <div className="grid items-center w-full sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 md:flex-row">
      {datas.map((data) => (
        <Link key={data.id} href={`/user/competitions/${data.id}`}>
          {/* @ts-ignore */}
          <CompetitionCardComponent
            key={data.id}
            data={data}
            imageUrl={`https://picsum.photos/300/200?random=${data.id}`}
          />
        </Link>
      ))}
    </div>
  );
}

/* import React from "react";
import { prisma } from "../../../utils/prisma";
import { Competition } from "../../../../typings";
 
const fecthDatas = async () => {
  const user = await prisma.user.findFirst({
    where: {
      email: {
        equals: "test@test.com",
      },
    },
  });

 

  return user;
};

type PageProps = {
  params:{
   
  }
}
async function ComptetitionList() {
  //const todos = await   fecthDatas();
  const user = await fecthDatas();

  return <div>{JSON.stringify(user)}</div>;
}

export default ComptetitionList;
 */
