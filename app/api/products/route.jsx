import { NextResponse, NextRequest } from "next/server";
//const { pool, } = require('@/db/dbMysql.config');
import pool from "@/db/dbMysql.config";

export async function GET() {
  try {
    const connection = await pool.getConnection();

    const [results, f] = await connection.query(`SELECT * FROM products`);

    //console.log(results);
    //const [rows] = await pool.query(`SELECT * FROM products`);

    //return NextResponse.json({ data: results.recordset }, { status: 201 });
    return NextResponse.json(results, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req, res) {
  const { productName, price } = await req.json();

  console.log(productName);
  console.log(price);

  // Check if productName and price are defined
  if (!productName || !price) {
    return NextResponse.json(
      { error: "productName and price are required" },
      { status: 400 }
    );
  }

  try {
    await pool.connect();

    const results = await pool.query(
      `
          INSERT INTO Products (ProductName, Price)
          VALUES (?, ?);
      `,
      [productName, price]
    );

    return NextResponse.json(
      { message: "Product added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/* export async function POST(req, res) {
    const { LogInName, LogInPassword } = await req.json()

    console.log(LogInName);
    console.log(LogInPassword);

    // Check if LogInName and LogInPassword are defined
    if (!LogInName || !LogInPassword) {
        return NextResponse.json({ error: 'LogInName and LogInPassword are required' }, { status: 400 });
    }

    try {
        await pool.connect();

        const results = await pool.request().query(`
            Select UserLogIn.DataID, UserLogIn.LogInName, UserLogIn.LogInPassword, UserRole.UserRoleCode
            From UserLogIn, UserRole
            Where UserLogIn.IsCurrent = 'Y' and 
            UserLogIn.IsActive = 'Y' and 
            UserLogIn.UserRoleDataID = UserRole.DataID and 
            UserRole.IsCurrent = 'Y' and 
            UserRole.IsActive = 'Y'   and 
            UserLogIn.LogInName = '${LogInName}' and 
            UserLogIn.LogInPassword = '${LogInPassword}'
                        `);

        return NextResponse.json({ data: results.recordset }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        pool.close();
    }
} */
