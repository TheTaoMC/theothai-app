import { NextResponse, NextRequest } from "next/server";
const { pool } = require('../../../db/db.config');

export async function GET() {

    try {
        await pool.connect();

        const results = await pool.request().query(`
        Select UserLogIn.DataID, UserLogIn.LogInName, UserLogIn.LogInPassword, UserRole.UserRoleCode
        From UserLogIn, UserRole
                    `);

        return NextResponse.json({ data: results.recordset }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        pool.close();
    }
}

export async function POST(req, res) {
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
}