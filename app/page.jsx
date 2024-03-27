"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import { async } from "./api/route";
import Container from "./components/Container";
import TestCart from "./testCart/page";
import Herder from "./components/Herder";
import Footer from "./components/Footer";

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
        <Herder />
        <Container>
          <TestCart />
        </Container>
        <Footer />
      </div>
    </>
  );
}
