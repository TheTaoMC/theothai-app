"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function Herder() {
  const { data: session, status } = useSession();

  //console.log("session ", session, status);
  return (
    <>
      <header className=" bg-gray-900/50">
        <div className="w-[80%] mx-auto py-4 flex justify-between">
          <div className="text-center text-2xl font-bold text-blue-gray-100">
            <Link href="/">บริษัท บั๊กคับ จำกัด</Link>
          </div>
          <div className="text-blue-gray-100 ">
            {session ? "สวัสดี, " + session.user.username : "Guest"}{" "}
            {!session && (
              <span
                className="hover:cursor-pointer border border-gray-950 rounded-md px-2 bg-blue-gray-300 text-black"
                onClick={() => signIn()}
              >
                เข้าสู่ระบบ
              </span>
            )}
            {session && (
              <span
                className="hover:cursor-pointer border border-gray-950 rounded-md px-2 bg-blue-gray-300 text-black"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                ออกจากระบบ
              </span>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Herder;
