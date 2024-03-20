import { NextResponse, NextRequest } from "next/server";
import pool from '@/db/dbMysql.config'

export async function POST(req, res) {
    const body = await req.json();
    console.log(body);
    const { username, password, email, f_name, l_name, tel, created_at } = body;
    const values = [username, password, email, f_name, l_name, tel, created_at];

    try {

        const connection = await pool.getConnection();
        const query = 'INSERT INTO user (username, password, email, f_name, l_name, tel,created_at) VALUES (?, ?, ?, ?, ?, ?,?)';
        const results = await connection.query(query, values);
        console.log('results ', results);

        connection.release();




        return NextResponse.json({ statusCode: 201, message: 'User created successfully' }, { status: 201 });

    } catch (error) {
        console.log(error);
        const isDuplicateUsername = /Duplicate entry '(.+)' for key 'username'/.test(error.sqlMessage);
        const isDuplicateEmail = /Duplicate entry '(.+)' for key 'email'/.test(error.sqlMessage);
        if (isDuplicateUsername) {
            return NextResponse.json({ error: 'Username already exists', mss: 'Usernamealready' }, { status: 409 });
        } else if (isDuplicateEmail) {
            return NextResponse.json({ error: 'Email already exists', mss: 'Emailalready' }, { status: 409 });
        }
        else {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
}