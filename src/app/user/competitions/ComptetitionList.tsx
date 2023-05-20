import React from "react";
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
