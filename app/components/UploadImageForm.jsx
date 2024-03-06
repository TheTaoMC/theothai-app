// components/UploadImageForm.js
"use client";
import { useState } from "react";
import Image from "next/image";

export default function UploadImageForm() {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const [toggle, setToggle] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", image);

    const response = await fetch("http://localhost:3000/api/uploadImage", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const imageUrl = await response.json();
      console.log("Image uploaded successfully:", imageUrl);
    } else {
      //const imageUrl = await response.json();
      console.error("Image upload failed:", response.statusText);
    }
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  //const filePath = `/img/logo.jpg`;
  //const fileUrl = `${req.headers.get("origin")}${filePath}`;

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="submit">Upload Image</button>

      <Image
        className="rounded-full"
        src={`/img/logo.webp`}
        width={150}
        height={150}
        alt=""
        priority={true}
      />
    </form>
  );
}
