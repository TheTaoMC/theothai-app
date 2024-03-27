"use client"; // This makes it a Client Component

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SessionMain() {
  const { data: session } = useSession();
  //console.log("session ", data);

  if (session) {
    console.log("session ", session);
    return (
      <div>
        Sign in as {session.user.username} <br />
        <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      Not Signed In <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
