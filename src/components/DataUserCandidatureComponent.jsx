"use client"
import React, { useState, useEffect } from "react";

import { CustomerService } from "../Services/Candidature";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";

import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Nom",
    selector: (row) => row.title,
  },
  {
    name: "Date Fin",
    selector: (row) => row.dateEnd,
    sortable:true
  },
  {
    name: "Description",
    selector: (row) => row.description,
  },
  {
    name: "Statut",
    selector: (row) => row.statut,
    sortable:true
  },
];

const data = [
  {
    id: 1,
    title: "Concours d'entrée medecine",
    dateEnd: "1988",
    description: "description",
    statut: "statut",
  },
  {
    id: 2,
    title: "Concours d'entrée exemple 1",
    dateEnd: "1984",
    description: "description",
    statut: "statut",
  },
  {
    id: 3,
    title: "Concours d'entrée exemple 2",
    dateEnd: "1984",
    description: "description",
    statut: "statut",
  },
  {
    id: 4,
    title: "Concours d'entrée exemple 3",
    dateEnd: "1984",
    description: "description",
    statut: "statut",
  },
  {
    id: 5,
    title: "Concours d'entrée exemple 4",
    dateEnd: "1984",
    description: "description",
    statut: "statut",
  },
];

export default function DataUserCandidatureComponent() {
  const [customers, setCustomers] = useState([]);

  const paginatorLeft = <div>k</div>;
  const paginatorRight = <div>k</div>;

  useEffect(() => {
    CustomerService.getCustomersMedium().then((data) => setCustomers(data));
  }, []);
 
  return (
    <DataTable
      pagination
       subHeader
  subHeaderAlign="right"
  subHeaderWrap
  striped
      fixedHeader={true}
      noHeader={false}
      highlightOnHover
      className="border-2 rounded"
      columns={columns}
      data={data}
    />
  );
}
