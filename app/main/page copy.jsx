import React from "react";
import Link from "next/link";
import UploadImageForm from "../components/UploadImageForm";

function Main() {
  return (
    <div className="flex flex-col">
      <div>
        <Link href="/monitoring">Monitoring</Link>
      </div>
      <div>
        <Link href="/check">Check</Link>
      </div>
      <div>
        <Link href="/management">Management</Link>
      </div>
      <UploadImageForm />
    </div>
  );
}

export default Main;
