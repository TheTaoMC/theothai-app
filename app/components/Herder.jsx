import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Herder() {
  const { data: session } = useSession();
  return (
    <>
      <header className=" bg-gray-900/50">
        <div className="w-[80%] mx-auto py-4 flex justify-between">
          <div className="text-center text-2xl font-bold text-blue-gray-100">
            บริษัท บั๊กคับ จำกัด
          </div>
          <div className="text-blue-gray-100 ">
            {session ? session.user.username : "Guest"}{" "}
            {!session && (
              <span className="hover:cursor-pointer" onClick={() => signIn()}>
                เข้าสู่ระบบ
              </span>
            )}
            {session && (
              <span
                className="hover:cursor-pointer"
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
