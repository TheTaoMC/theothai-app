import useStore from "@/zustand/store";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Image from "next/image";
import { useState } from "react";
import CartIcon from "./components/cartIcon";

export default function TestCart() {
  const { cart, addToCart, removeFromCart } = useStore();

  console.log("cart ", cart.length);

  const header = (url, name) => {
    //console.log("url ", url);
    return (
      <div className="border border-red-400 w-60 h-60">
        <Image
          src={url}
          alt={name}
          width={512}
          height={512}
          className="w-full h-full object-cover"
        />
        {/*         <img
          className="w-full h-full object-cover"
          alt="Card"
          src={url}
          onError={(e) => {
            e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png";
          }}
        /> */}
      </div>
    );
  };
  const footer = (name, price, url) => {
    return (
      <Button
        label="ADD"
        icon="pi pi-plus"
        onClick={() =>
          handleAddToCart({ name: name, price: price, quantity: 1, url: url })
        }
      />
    );
  };

  const productItem = [
    {
      name: "Product 1",
      price: 10,
      url: "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Product 2",
      price: 20,
      url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Product 3",
      price: 390,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Product 4",
      price: 320,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Product 5",
      price: 360,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Product 6",
      price: 380,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Product 7",
      price: 370,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Product 8",
      price: 360,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Product 9",
      price: 530,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Product 10",
      price: 230,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleRemoveFromCart = (itemIndex) => {
    removeFromCart(itemIndex);
  };



  return (
    <div>
      <CartIcon />

      <div className="flex justify-between flex-wrap  h-auto gap-10">
        {productItem.map((e, i) => (
          <Card
            key={i}
            title={e.name}
            subTitle={"ราคา :" + e.price}
            footer={footer(e.name, e.price, e.url)}
            header={header(e.url, e.name)}
            //className="md:w-25rem"
          >
            <p className="m-0">Name</p>
          </Card>
        ))}
      </div>
      <div>
        <h1>Shopping Cart</h1>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name + " ราคา " + item.price + " "}
              <button onClick={() => handleRemoveFromCart(index)}>ลบ</button>
            </li>
          ))}
        </ul>
        {/* แสดงรายการสินค้าและปุ่มเพิ่มในตะกร้า */}
        {/*         <button onClick={() => handleAddToCart({ name: "Product 1" })}>
          Add Product 1 to Cart
        </button> */}
      </div>
      <button
        className="middle none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        Button
      </button>
    </div>
  );
}
