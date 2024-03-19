"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import Herder from "../components/Herder";
import Footer from "../components/Footer";
import { Input, Card, Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();
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

    console.log(response);
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
    router.push("/login");
  };
  return (
    <>
      <Herder />
      <Container>
        <div className="p-4  bg-gray-900/50 rounded-xl min-w-[15rem] max-w-[25rem] mx-auto my-4">
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
            <Button type="submit" size="md" color="blue">
              สมัครสมาชิก
            </Button>
            <Button variant="outlined" loading={true}>
              Loading
            </Button>
            <Button variant="outlined" loading={true} color="blue">
              Loading
            </Button>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
