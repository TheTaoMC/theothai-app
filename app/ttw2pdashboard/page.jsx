import React from "react";
import Footer from "./ui/Footer";
import Herder from "./ui/Herder";
import Content from "./ui/Content";

function TTW2pDashBoard() {
  return (
    <>
      <div className="max-h-[90vh]">
        <Herder />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default TTW2pDashBoard;
