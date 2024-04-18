import React, { useState } from "react";
import useStore from "@/zustand/store";
import Image from "next/image";

function CartIcon() {
  const { cart, addToCart, removeFromCart } = useStore();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
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
                <Image
                  src={e.url}
                  alt={e.name}
                  width={512}
                  height={512}
                  className="w-10 h-10 object-cover mr-2"
                />
                <div>
                  <p className="text-sm font-semibold">{e.name}</p>
                  <p className="text-sm text-gray-500">
                    {e.quantity} x {e.price} = {e.price * e.quantity}
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
  );
}

export default CartIcon;
