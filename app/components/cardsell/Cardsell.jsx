"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardUI from "../CardUI";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const datas = [
  {
    id: 1,
    name: "Apple AirPods",
    img: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 95.0,
    detail: "หน้าร้อน ราคาปกติ ขายดี",
  },
  {
    id: 2,
    name: "Apple AirPods",
    img: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 95.0,
    detail: "หน้าร้อน ราคาปกติ ขายดี",
  },
  {
    id: 3,
    name: "Apple AirPods",
    img: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 95.0,
    detail: "หน้าร้อน ราคาปกติ ขายดี",
  },
  {
    id: 4,
    name: "Apple AirPods",
    img: "https://plus.unsplash.com/premium_photo-1664195539623-e25ce8e8d64b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 95.0,
    detail: "หน้าร้อน ราคาปกติ ขายดี",
  },
  {
    id: 5,
    name: "Apple AirPods",
    img: "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 95.0,
    detail: "หน้าร้อน ราคาปกติ ขายดี",
  },
  {
    id: 6,
    name: "Apple AirPods",
    img: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 95.0,
    detail: "หน้าร้อน ราคาปกติ ขายดี",
  },
  {
    id: 7,
    name: "Apple AirPods",
    img: "https://images.unsplash.com/photo-1492107376256-4026437926cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 95.0,
    detail: "หน้าร้อน ราคาปกติ ขายดี",
  },
  {
    id: 8,
    name: "Apple AirPods",
    img: "https://plus.unsplash.com/premium_photo-1678565546661-bf43274dd428?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 95.0,
    detail: "หน้าร้อน ราคาปกติ ขายดี",
  },
  {
    id: 9,
    name: "Apple AirPods",
    img: "https://plus.unsplash.com/premium_photo-1678565546661-bf43274dd428?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 95.0,
    detail: "หน้าร้อน ราคาปกติ ขายดี",
  },
  {
    id: 10,
    name: "Apple AirPods",
    img: "https://plus.unsplash.com/premium_photo-1678565546661-bf43274dd428?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 95.0,
    detail: "หน้าร้อน ราคาปกติ ขายดี",
  },
];

function Cardsell() {
  return (
    <>
      <Carousel
        responsive={responsive}
        centerMode={true}
        autoPlay
        autoPlaySpeed={2000}
        shouldResetAutoplay
        rewind={true}
        rewindWithAnimation={true}
        swipeable
        infinite
      >
        {datas.map((e, i) => (
          <CardUI
            key={e.id}
            id={e.id}
            name={e.name}
            img={e.img}
            price={e.price}
            detail={e.detail}
          />
        ))}
      </Carousel>
    </>
  );
}

export default Cardsell;
