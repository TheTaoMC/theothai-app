"use client";
import React from "react";
import Link from "next/link";
import UploadImageForm from "../components/UploadImageForm";
import { useSession, signIn, signOut } from "next-auth/react";

function Main() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Sign in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not Signed In <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
export default Main;
