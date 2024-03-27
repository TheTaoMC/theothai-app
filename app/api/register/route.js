import { NextResponse, NextRequest } from "next/server";
import pool from "@/db/dbMysql.config";
import bcrypt from "bcrypt";
const saltRounds = 10;

export async function GET() {
  try {
    //const connection = await pool.getConnection();

    const [results] = await pool.query(`

        SELECT * 
        FROM user
        `);

    console.log("Load Data...");
    //console.log(results);
    //const [rows] = await pool.query(`SELECT * FROM products`);

    //return NextResponse.json({ data: results.recordset }, { status: 201 });
    return NextResponse.json({ data: results }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req, res) {
  const body = await req.json();
  console.log("body ", body);
  const { username, password, email, f_name, l_name, tel, created_at } = body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const values = [
    username,
    hashedPassword,
    email,
    f_name,
    l_name,
    tel,
    created_at,
  ];

  try {
    const connection = await pool.getConnection();
    const query =
      "INSERT INTO user (username, password, email, f_name, l_name, tel,created_at) VALUES (?, ?, ?, ?, ?, ?,?)";
    const results = await connection.query(query, values);
    console.log("results ", results);

    connection.release();

    return NextResponse.json(
      { statusCode: 201, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    const isDuplicateUsername =
      /Duplicate entry '(.+)' for key 'username'/.test(error.sqlMessage);
    const isDuplicateEmail = /Duplicate entry '(.+)' for key 'email'/.test(
      error.sqlMessage
    );
    if (isDuplicateUsername) {
      return NextResponse.json(
        { error: "Username already exists", mss: "Usernamealready" },
        { status: 409 }
      );
    } else if (isDuplicateEmail) {
      return NextResponse.json(
        { error: "Email already exists", mss: "Emailalready" },
        { status: 409 }
      );
    } else {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
