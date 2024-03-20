import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextResponse, NextRequest } from "next/server";
import pool from '@/db/dbMysql.config'

export async function POST(req, res) {
    const body = await req.json();
    console.log(body);

    const { usernameoremail, password } = body;
    const values = [usernameoremail, usernameoremail];

    try {

        const connection = await pool.getConnection();
        const query = 'SELECT * FROM user WHERE (username = ? OR email = ?)';
        const [results, f] = await connection.query(query, values);
        //console.log('results ', results[0].password);

        connection.release();



        if (results.length === 0) {
            return NextResponse.json({ error: 'Username or email not found', mss: 'NotUsername' }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, results[0].password)

        console.log(isPasswordValid);

        if (!isPasswordValid) {
            return new Response('Invalid credentials', { status: 401 })
        }

        // สร้าง JWT
        const token = jwt.sign({ userId: results[0].id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        })

        //return NextResponse.json({ statusCode: 200, message: 'User login successfully' }, { status: 200 });
        return new Response(JSON.stringify({ token }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        })

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