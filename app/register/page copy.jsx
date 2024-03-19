"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import Herder from "../components/Herder";
import Footer from "../components/Footer";
import { Input } from "@material-tailwind/react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
    confirmemail: "",
    f_name: "",
    l_name: "",
    tel: "",
    created_at: new Date(),
  });

  //console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username === "") {
      return alert("กรุณาใส่ชื่อผู้ใช้");
    }
    if (formData.password === "") {
      return alert("กรุณาใส่รหัสผ่าน");
    }
    if (formData.confirmpassword === "") {
      return alert("กรุณาใส่ยืนยันรหัสผ่าน");
    }
    if (formData.email === "") {
      return alert("กรุณาใส่อีเมล");
    }
    if (formData.confirmemail === "") {
      return alert("กรุณาใส่ยืนยันอีเมล");
    }
    if (formData.tel === "") {
      return alert("กรุณาใส่เบอร์โทรศัพท์");
    }
    if (formData.password !== formData.confirmpassword) {
      return alert("รหัสผ่านไม่ตรงกัน");
    }
    if (formData.email !== formData.confirmemail) {
      return alert("อีเมลไม่ตรงกัน");
    }

    // ส่งข้อมูลไปยังเซิร์ฟเวอร์เพื่อบันทึกในฐานข้อมูล
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      /*       headers: {
        "Content-Type": "application/json",
      }, */
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.log("Network response was not ok");
      const data = await response.json();
      console.log(data);
      if (data.mss === "Usernamealready") {
        return alert("ชื่อผู้ใช้มีอยู่แล้ว");
      }
      if (data.mss === "Emailalready") {
        return alert("อีเมลมีอยู่แล้ว");
      }

      return;
    }

    const data = await response.json();
    console.log(data.mss);
    if (data.mss === "Usernamealready") {
      return alert("ชื่อผู้ใช้มีอยู่แล้ว");
    }
  };
  return (
    <>
      <Herder />
      <Container>
        <div className="p-4">
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
            <input
              className="px-2 rounded-lg"
              type="text"
              name="f_name"
              placeholder="ชื่อ"
              value={formData.f_name}
              onChange={handleChange}
            />
            <input
              className="px-2 rounded-lg"
              type="text"
              name="l_name"
              placeholder="นามสกุล"
              value={formData.l_name}
              onChange={handleChange}
            />
            <input
              className="px-2 rounded-lg w-auto"
              type="text"
              name="username"
              placeholder="ชื่อผู้ใช้"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              className="px-2 rounded-lg"
              type="password"
              name="password"
              placeholder="รหัสผ่าน"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              className="px-2 rounded-lg"
              type="password"
              name="confirmpassword"
              placeholder="ยืนยันรหัสผ่าน"
              value={formData.confirmpassword}
              onChange={handleChange}
            />
            <input
              className="px-2 rounded-lg"
              type="email"
              name="email"
              placeholder="อีเมล"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="px-2 rounded-lg"
              type="email"
              name="confirmemail"
              placeholder="ยืนยันอีเมล"
              value={formData.confirmemail}
              onChange={handleChange}
            />

            <input
              className="px-2 rounded-lg"
              type="tel"
              name="tel"
              placeholder="เบอร์โทรศัพท์"
              value={formData.tel}
              onChange={handleChange}
            />
            <button
              className="w-auto mx-auto px-2 bg-gray-400 rounded-md"
              type="submit"
            >
              สมัครสมาชิก
            </button>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
