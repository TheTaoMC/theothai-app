// pages/api/users.js
import { NextResponse } from "next/server";
const { pool } = require('../../../db/db.config');

export async function GET() {

    try {
        await pool.connect();

        const results = await pool.request().query(`
        Select UserLogIn.DataID, UserLogIn.LogInName, UserLogIn.LogInPassword, UserRole.UserRoleCode
        From UserLogIn, UserRole
        Where UserLogIn.IsCurrent = 'Y' and UserLogIn.IsActive = 'Y' and UserLogIn.UserRoleDataID = UserRole.DataID and UserRole.IsCurrent = 'Y' and UserRole.IsActive = 'Y'   and UserLogIn.LogInName = 'admin' and UserLogIn.LogInPassword = '1234'
                    `);

        return NextResponse.json({ data: results.recordset }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        pool.close();
    }
}