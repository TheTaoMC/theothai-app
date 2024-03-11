// app/page.js
import useStore from "@/zustand/store";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function TestCart() {
  const { cart, addToCart, removeFromCart } = useStore();

  console.log("cart ", cart);

  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const footer2 = (name, price) => {
    return (
      <Button
        label="ADD"
        icon="pi pi-plus"
        onClick={() =>
          handleAddToCart({ name: name, price: price, quantity: 1 })
        }
      />
    );
  };

  const productItem = [
    {
      name: "Product 1",
      price: 10,
    },
    {
      name: "Product 2",
      price: 20,
    },
    {
      name: "Product 3",
      price: 30,
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
      <div className="card flex justify-content-center w-[25rem] h-[25rem] gap-4">
        {productItem.map((e, i) => (
          <Card
            key={i}
            title={e.name}
            subTitle={"ราคา :" + e.price}
            footer={footer2(e.name, e.price)}
            header={header}
            className="md:w-25rem"
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
    </div>
  );
}
