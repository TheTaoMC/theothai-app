"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from 'next/link'

function Monitoring() {
  const [datasMo, setDataMo] = useState([]);
  const getDatas = async () => {
    //const fetchDatas = await fetch("http://localhost:3000/api/monitoring");

    const fetchDatas = await fetch(`http://localhost:3000/api/monitoring`, {
      cache: "no-store",
    });

    if (!fetchDatas.ok) {
      throw new Error("Network response was not ok");
    }
    const datas = await fetchDatas.json();
    console.log(datas.data);
    setDataMo(datas.data);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      await getDatas();
    }, 5000); // เรียก getDatas ทุกๆ 5 วินาที

    return () => clearInterval(interval);
  }, []);

  const columns = [
    { field: "JobCode", header: "Job No." },
    {
      field: "JobDate",
      header: "วันที่สั่ง",
      body: (rowData) => {
        const currentDate = new Date(rowData.JobDate);
        const formattedDate = currentDate.toLocaleDateString(); // แปลงเป็นรูปแบบวันที่ที่ต้องการ
        return formattedDate;
      },
    },
    { field: "FormulaDescription1", header: "ชื่อสูตร" },
    { field: "TotalBatch", header: "จำนวน Batch" },
    {
      field: "WeightFinishBatch",
      header: "Batch ที่เสร็จ",
      /*       body: (rowData) => {
        console.log(rowData);
        return rowData.WeightFinishBatch === 0 ? "ใช้งาน" : "ยกเลิก";
      }, */
    },
  ];
  //const rowClassName = (data) => (data.WeightFinishBatch > 0 ? 'bg-yellow-300' : data.WeightFinishBatch === data.TotalBatch ? 'bg-green-300' : '');
  const rowClassName = (data) =>
    data.WeightFinishBatch > 0 && data.WeightFinishBatch !== data.TotalBatch
      ? "bg-yellow-300"
      : data.WeightFinishBatch === data.TotalBatch
      ? "bg-green-300"
      : "";
  return (
    <div className="w-[90%] mx-auto py-4">
      <div className="text-center text-2xl font-semibold">Monitoring</div>
      <DataTable
        value={datasMo}
        tableStyle={{ minWidth: "25rem" }}
        size={"small"}
        scrollable
        scrollHeight="80vh"
        rowClassName={rowClassName}
        sortField="WeightFinishBatch"
        sortOrder={-1}
      >
        {columns.map((e, i) => (
          <Column
            sortable
            key={i}
            field={e.field}
            header={e.header}
            body={e.body}
            /* className={`${e.WeightFinishBatch > "0" ? 'bg-red-500' : 'bg-green-500'}`}  */
          />
        ))}
      </DataTable>
      <div><Link href="/main">กลับ</Link></div>
    </div>
  );
}

export default Monitoring;
