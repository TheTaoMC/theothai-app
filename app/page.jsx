"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import { async } from "./api/route";
import Container from "./components/Container";

export default function Home() {
  const [datas, setDatas] = useState([]);
  const getDatas = async () => {
    try {
      const getdatas = await fetch("https://nextjs.theothai.com/api");

      if (!getdatas.ok) {
        throw new Error("Network response was not ok");
      }

      const datas = await getdatas.json();
      setDatas(datas);
      console.log(datas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <div>
        <Container>
          form
          <div>เข้าสู่ระบบ</div>
          <div>ชื่อผู้ใช้งาน</div>
          <div>รหัสผ่าน</div>
          <div> input </div>
        </Container>
      </div>
    </>
  );
}
