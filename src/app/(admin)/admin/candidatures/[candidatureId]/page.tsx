import React from 'react'
import DataUserAdminCandidatureComponent from '../../../../../components/DataUserAdminCandidatureComponent'
async function page ({
    params,
  }: {
    params: {
        candidatureId: string;
    };
  }) {

    const res = await fetch(`${process.env.BASE_URL}/api/admin/competition?id=${params.candidatureId}`,{next:{revalidate:1}})
    const datas: any[] = await res.json();
       
     

  return (
    <div className="flex flex-col flex-1 w-full ">
       
    
    
    <DataUserAdminCandidatureComponent datas={datas}/>
    </div>
  )
}

export default page