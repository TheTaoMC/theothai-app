import React from "react";
import Footer from "../components/Footer";
import Herder from "../components/Herder";
import SessionMain from "./SessionMain"; // Server Component
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
      {/* <Herder /> */}
      <SessionMain />
      <Footer />
    </>
  );
}
