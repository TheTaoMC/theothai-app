"use client";
import React, { useState, useRef } from "react";
import Container from "../components/Container";
import Herder from "../components/Herder";
import Footer from "../components/Footer";
import { Toast } from "primereact/toast";
import { Input, Card, Button, Alert } from "@material-tailwind/react";

import { useRouter } from "next/navigation";

function Register() {
  const toast = useRef(null);
  const router = useRouter();
  const [registerLogin, setRegisterLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    email: "@",
    confirmemail: "@",
    f_name: "",
    l_name: "",
    tel: "",
    created_at: new Date(),
  });

  //console.log(formData);

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
    if (formData.f_name === "") {
      text = "กรุณากรอกชื่อ";
      showError(text);
      return;
    }
    if (formData.l_name === "") {
      text = "กรุณากรอกนามสกุล";
      showError(text);
      return;
    }
    if (formData.username === "") {
      text = "กรุณากรอกชื่อผู้ใช้";
      showError(text);
      return;
    }
    if (formData.password === "") {
      text = "กรุณากรอกรหัสผ่าน";
      showError(text);
      return;
    }
    if (formData.confirmpassword === "") {
      text = "กรุณากรอกยืนยันรหัสผ่าน";
      showError(text);
      return;
    }
    if (formData.email === "") {
      text = "กรุณากรอกอีเมล";
      showError(text);
      return;
    }
    if (formData.confirmemail === "") {
      text = "กรุณากรอกยืนยันอีเมล";
      showError(text);
      return;
    }
    if (formData.tel === "") {
      text = "กรุณากรอกเบอร์โทรศัพท์";
      showError(text);
      return;
    }
    if (formData.password !== formData.confirmpassword) {
      text = "รหัสผ่านไม่ตรงกัน";
      showError(text);
      return;
    }
    if (formData.email !== formData.confirmemail) {
      text = "อีเมลไม่ตรงกัน";
      showError(text);
      return;
    }

    setRegisterLogin(true);

    // ส่งข้อมูลไปยังเซิร์ฟเวอร์เพื่อบันทึกในฐานข้อมูล
    const response = await fetch("http://localhost:3000/api/register", {
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
        setRegisterLogin(false);
        text = "ชื่อผู้ใช้มีอยู่แล้ว";
        return showError(text);
      }
      if (data.mss === "Emailalready") {
        setRegisterLogin(false);
        text = "อีเมลมีอยู่แล้ว";
        return showError(text);
      }
      return;
    }
    const data = await response.json();

    // ส่งไปยังหน้า login
    //const routerlogin = router.push("/login");
    text = "สมัครสําเร็จ กำลังไปหน้า Login";
    showSuccess(text);
    const timer = setTimeout(() => {
      router.push("/login");
    }, 3000);
  };
  return (
    <>
      <Toast ref={toast} />
      <Herder />
      <Container>
        <div className=" p-4  bg-gray-900/50 rounded-xl min-w-[15rem] max-w-[25rem] mx-auto my-4">
          <div className="text-2xl font-bold text-center text-white">
            สมัครสมาชิก
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 p-2 min-w-[15rem] max-w-[25rem] m-auto"
          >
            <Input
              type="text"
              name="f_name"
              variant="outlined"
              label="ชื่อ"
              color="white"
              value={formData.f_name}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="l_name"
              variant="outlined"
              label="นามสกุล"
              color="white"
              value={formData.l_name}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="username"
              variant="outlined"
              label="ชื่อผู้ใช้"
              color="white"
              value={formData.username}
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
            <Input
              type="password"
              name="confirmpassword"
              variant="outlined"
              label="ยืนยันรหัสผ่าน"
              color="white"
              value={formData.confirmpassword}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              variant="outlined"
              label="อีเมล"
              color="white"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="confirmemail"
              variant="outlined"
              label="ยืนยันอีเมล"
              color="white"
              value={formData.confirmemail}
              onChange={handleChange}
            />
            <Input
              type="tel"
              name="tel"
              variant="outlined"
              label="เบอร์โทรศัพท์"
              color="white"
              value={formData.tel}
              onChange={handleChange}
            />
            <Button
              type="submit"
              size="md"
              color="blue"
              loading={registerLogin ? true : false}
            >
              {registerLogin ? "กำลังดำเนินการ" : "สมัครสมาชิก"}
            </Button>

            <div className="mt-4  text-white/50 flex justify-end flex-wrap">
              <div>หากมีบัญชีผู้ใช้แล้ว คุณสามารถ</div>
              <div
                className="text-blue-500 cursor-pointer ml-2"
                onClick={() => router.push("/login")}
              >
                เข้าสู่ระบบ
              </div>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
