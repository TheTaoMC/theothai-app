import { NextResponse, NextRequest } from "next/server";
const { pool } = require('../../../db/db.config');
import path from "path";
import { writeFile } from "fs/promises";
import sharp from 'sharp';

//const upload = multer({ dest: '/tmp' });
export async function POST(req, res) {
    const formData = await req.formData();
    const file = formData.get("file");
    if (file === 'undefined') {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const fileExt = path.extname(file.name).toLowerCase();
    if (fileExt !== ".jpg" && fileExt !== ".png") {
        return NextResponse.json({ Message: "Invalid file format. Only JPG and PNG files are allowed." }, { status: 400 });
    }

    console.log(fileExt);


    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = "logo.webp"; // ระบุชื่อไฟล์ .webp ที่คุณต้องการ
    //const filename = "logo" + fileExt;
    //const filename = "logo" + '.jpg';
    //const filename = file.name.replaceAll(" ", "_");
    console.log(filename);
    try {
/*         await writeFile(
            path.join(process.cwd(), "public/img/" + filename),
            buffer
        ); */
        await sharp(buffer)
        .toFormat('webp') // ระบุให้แปลงเป็น .webp
        .toFile(path.join(process.cwd(), "public/img/" + filename));

        return NextResponse.json({ Message: "Success", status: 201 ,imageUrl: `/img/${filename}`});
    } catch (error) {
        return NextResponse.json({ Message: "Failed", status: 500 });
    } finally {
        pool.close();
    }
}