"use client";
import React, { useState, useRef } from "react";
import Container from "../components/Container";
import Herder from "../components/Herder";
import Footer from "../components/Footer";
import { Toast } from "primereact/toast";
import { Input, Card, Button, Alert } from "@material-tailwind/react";

import { useRouter } from "next/navigation";

function Login() {
  const toast = useRef(null);
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const [formData, setFormData] = useState({
    usernameoremail: "",
    password: "",
    login_last: new Date(),
  });
  //toast
  const showSuccess = (text) => {
    toast.current.show({
      severity: "success",
      summary: "สำเร็จ",
      detail: text,
      baseZIndex: 5,
      life: 3000,
    });
  };
  const showError = (text) => {
    toast.current.show({
      //className: "bg-red-500/50 text-white",
      severity: "error",
      summary: "แจ้งเตือน",
      detail: text,
      life: 3000,
    });
  };
  //toast

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let text;
    if (formData.usernameoremail === "") {
      text = "กรุณากรอกชื่อผู้ใช้งาน หรือ email";
      showError(text);
      return;
    }

    if (formData.password === "") {
      text = "กรุณากรอกรหัสผ่าน";
      showError(text);
      return;
    }

    setLogin(true);

    // ส่งข้อมูลไปยังเซิร์ฟเวอร์เพื่อบันทึกในฐานข้อมูล
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      /*       headers: {
        "Content-Type": "application/json",
      }, */
      body: JSON.stringify(formData),
    });

    console.log(response);

    if (!response.ok) {
      console.log("Network response was not ok");
      const data = await response.json();
      console.log(data);

      if (data.mss === "Usernamealready") {
        setLogin(false);
        text = "ชื่อผู้ใช้มีอยู่แล้ว";
        return showError(text);
      }
      if (data.mss === "Emailalready") {
        setLogin(false);
        text = "อีเมลมีอยู่แล้ว";
        return showError(text);
      }
      if (data.mss === "NotUsername") {
        setLogin(false);
        text = "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง";
        return showError(text);
      }
      setLogin(false);
      return;
    }
    const data = await response.json();

    // ส่งไปยังหน้า main

    const timer = setTimeout(() => {
      router.push("/main");
    }, 3000);
  };
  return (
    <>
      <Toast ref={toast} />
      <Herder />
      <Container>
        <div className=" p-4  bg-gray-900/50 rounded-xl min-w-[15rem] max-w-[25rem] mx-auto my-4">
          <div className="text-2xl font-bold text-center text-white">
            เข้าสู่ระบบ
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 p-2 min-w-[15rem] max-w-[25rem] m-auto"
          >
            <Input
              type="text"
              name="usernameoremail"
              variant="outlined"
              label="ชื่อผู้ใช้ หรือ อีเมล"
              color="white"
              value={formData.usernameoremail}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              variant="outlined"
              label="รหัสผ่าน"
              color="white"
              value={formData.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              size="md"
              color="blue"
              loading={login ? true : false}
            >
              เข้าสู่ระบบ
            </Button>
            <div className="flex">
              <hr className="bg-red-500 w-full m-auto" />
              <div className="px-4 text-white">หรือ</div>
              <hr className="bg-red-500 w-full m-auto" />
            </div>
            <div></div>
            <Button
              size="md"
              color="blue-gray"
              onClick={() => router.push("/register")}
            >
              สมัครสมาชิก
            </Button>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
