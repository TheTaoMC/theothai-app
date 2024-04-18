import React from "react";
import Footer from "../components/Footer";
import Herder from "../components/Herder";
import SessionMain from "./SessionMain"; // Server Component
import { useSession, signIn, signOut } from "next-auth/react";
import Hero from "../components/hero/Hero";
import Container from "../components/Container";
import Cardsell from "../components/cardsell/Cardsell";

export default function Home() {
  return (
    <>
      <Herder />
      {/* <SessionMain /> */}
      <Hero />
      <Container>
        <div className="p-4 bg-gray-900/50">
          <div className="flex justify-between">
            <div className="text-white text-2xl">สินค้าขายดีประจำสัปดาห์</div>
            <div className="text-white">เพิ่มเติม...</div>
          </div>

          <Cardsell />
        </div>
      </Container>

      <Footer />
    </>
  );
}
