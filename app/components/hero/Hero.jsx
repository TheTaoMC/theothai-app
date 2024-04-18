"use client";
import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const datas = [
  {
    id: 1,
    name: "โปรโมชั่น หน้าร้อน -50%",
    detail: "โปรโมชั่นสุดปัง หน้าร้อนนี้เท่านั้น",
    img: "https://images.unsplash.com/photo-1594968973184-9040a5a79963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "โปรโมชั่น หน้าร้อน ลดหนักๆ กว่า 30%",
    detail: "โปรโมชั่นสุดปัง หน้าร้อนนี้เท่านั้น",
    img: "https://plus.unsplash.com/premium_photo-1670152411569-7cbc00946857?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "โปรโมชั่น หน้าร้อน ลดเวอร์มากกกกก",
    detail: "โปรโมชั่นสุดปัง หน้าร้อนนี้เท่านั้น",
    img: "https://plus.unsplash.com/premium_photo-1673502752899-04caa9541a5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Hero() {
  return (
    <>
      <Carousel loop={true} autoplay={true} className="">
        {datas.map((e, i) => (
          <div key={e.id} className="relative h-[30vh] w-full">
            <img
              src={e.img}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-4xl"
                >
                  {e.name}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  {e.detail}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default Hero;
