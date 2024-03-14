"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Content() {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    const results = await fetch("http://localhost:3000/api/weight");
    const resultsJson = await results.json();
    //console.log(datas);
    setDatas(resultsJson.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="w-[80%] mx-auto py-4">
        <table className="w-full border-separate border-spacing-2 bg-gray-400 rounded-2xl mx-auto">
          <caption className="caption-top">
            รายการข้อมูล รถค้างชั่งในโรงงาน
          </caption>
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-2xl">
                เวลาชั่งเข้า
              </th>
              <th className="border border-slate-600 rounded-2xl">ทะเบียน</th>
              <th className="border border-slate-600 rounded-2xl">สินค้า</th>
              <th className="border border-slate-600 rounded-2xl">แผนก</th>
            </tr>
          </thead>
          {datas.map((e, i) => (
            <tbody key={i}>
              <tr className="">
                <td className="border border-slate-700 rounded-2xl px-4 py-2">
                  {e.WeightTimeIn}
                </td>
                <td className="border border-slate-700 rounded-2xl px-4 py-2">
                  {e.CarRegister}
                </td>
                <td className="border border-slate-700 rounded-2xl px-4 py-2">
                  {e.ProductName}
                </td>
                <td className="border border-slate-700 rounded-2xl px-4 py-2">
                  {e.ProductName + 1}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default Content;
