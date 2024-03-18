"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Image from "next/image";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function Content() {
  const [datas, setDatas] = useState([]);
  //console.log(datas);
  const getData = async () => {
    const results = await fetch("http://localhost:3000/api/weight");

    if (!results.ok) {
      console.log("Network response was not ok");
      return;
    }

    const resultsJson = await results.json();
    //console.log(datas);

    setDatas(resultsJson.data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 5000); // ทำการ Polling ทุก 5 วินาที

    return () => clearInterval(interval);
  }, []);

  const columns = [
    {
      field: "WeightTimeIn",
      header: "เวลาชั่งเข้า",
      minWidth: "8rem",
      maxWidth: "8rem",
      body: (rowData) => {
        const currentDate = new Date(rowData.WeightTimeIn);
        const formattedDate = moment(currentDate).format(
          "DD/MM/YYYY : HH:mm:ss"
        );
        return formattedDate;
      },
    },
    { field: "CarRegister", header: "ทะเบียนรถ" },
    { field: "WeightTypeName", header: "ประเภทชั่ง" },
    { field: "DriverName", header: "พนักงานขับรถ" },
    { field: "ProductName", header: "สินค้า" },
    { field: "ProductName", header: "แผนก" },
  ];
  return (
    <>
      <div className="w-[95%] mx-auto py-4">
        <div className="card">
          <div className="text-center text-2xl font-bold bg-blue-gray-300 p-4 rounded-t-2xl">
            รายการรถค้างในโรงงานขาเข้า
          </div>
          <DataTable
            stripedRows
            className="h-[60vh] overflow-hidden"
            tableClassName=" text-amber-900 bg- shadow-2xl"
            rowClassName=" text-amber-500 bg-black shadow-2xl py-10"
            value={datas}
            size={'large'}
            scrollable scrollHeight="flex"
            tableStyle={{
              minWidth: "50rem",
            }}
          >
            {columns.map((col, i) => (
              <Column
                headerClassName="text-amber-900  bg-black shadow-2xl "
                className="bg-blue-gray-900"
                key={i}
                field={col.field}
                header={col.header}
                body={col.body}
                style={{ minWidth: col.minWidth, maxWidth: col.maxWidth }}
              />
            ))}
          </DataTable>
          <div className="text-center text-2xl font-bold bg-blue-gray-300 p-4 rounded-b-2xl">
            จำนวนรถค้างในโรงงาน {datas.length || 0} รายการ
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
