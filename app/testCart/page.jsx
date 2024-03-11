// app/page.js
import useStore from "@/zustand/store";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Image from "next/image";
import { useState } from "react";

export default function TestCart() {
  const { cart, addToCart, removeFromCart } = useStore();

  console.log("cart ", cart.length);

  const header = (url) => {
    //console.log("url ", url);
    return (
      <div className="border border-red-400 w-60 h-60">
        {/* <Image src={url} alt="Card" width={300} height={300} /> */}
        <img
          className="w-full h-full object-cover"
          alt="Card"
          src={url}
          onError={(e) => {
            e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png";
          }}
        />
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

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className="flex relative">
        <div
          className="my-4 pi pi-shopping-cart"
          style={{ fontSize: "2.5rem" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="">{cart.length}</div>
          <div
            className={`absolute z-10 bg-white shadow-md p-4 ${
              isHovered ? "block" : "hidden"
            }`}
          >
            {cart.length === 0 ? (
              <div className="flex flex-col items-center">
                <div className="pi pi-ban" style={{ fontSize: "2.5rem" }}></div>
                <div className="text-xl">ยังไม่มีสินค้าในรถเข็น</div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="text-xs">สินค้าที่เพิ่งเพิ่มเข้าไป</div>
              </div>
            )}
            {cart
              .slice() // สร้างสำเนาของ cart
              .sort((a, b) => b.name.localeCompare(a.name)) // เรียงลำดับตามชื่อแบบลดหลัง
              .slice(0, 5) // เลือกเฉพาะ 5 รายการแรก
              .map((e, i) => (
                <div key={i} className="flex items-center mb-2">
                  <img
                    src={e.url}
                    alt={e.name}
                    className="w-10 h-10 object-cover mr-2"
                  />
                  <div>
                    <p className="text-sm font-semibold">{e.name}</p>
                    <p className="text-sm text-gray-500">
                      {e.quantity} x {e.price}
                    </p>
                    {/* <button onClick={() => handleRemoveFromCart(i)}>ลบ</button> */}
                  </div>
                </div>
              ))}

            {cart.length === 0 ? (
              ""
            ) : (
              <div className="flex flex-col items-center">
                <div className="text-xs">
                  รายการสินค้าทั้งหมด {cart.length} รายการ
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap  h-auto gap-10">
        {productItem.map((e, i) => (
          <Card
            key={i}
            title={e.name}
            subTitle={"ราคา :" + e.price}
            footer={footer(e.name, e.price, e.url)}
            header={header(e.url)}
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
