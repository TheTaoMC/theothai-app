import { NextResponse, NextRequest } from "next/server";
import pool from '@/db/dbMysql.config'

export async function GET() {

    try {
        //const connection = await pool.getConnection();

        const [results] = await pool.query(`

        SELECT * 
        FROM weight LEFT JOIN product ON weight.ProductDataID = product.DataID
                        LEFT JOIN transporter ON weight.TransporterDataID = transporter.DataID
                        LEFT JOIN driver ON weight.DriverDataID = driver.DataID
                        LEFT JOIN weighttype ON weight.WeightTypeDataID = weighttype.DataID
            WHERE weight.WeightOut IS NULL
        
        
        ORDER BY WeightTimeIn DESC
        `);

        console.log('Load Data...');
        //console.log(results);
        //const [rows] = await pool.query(`SELECT * FROM products`);

        //return NextResponse.json({ data: results.recordset }, { status: 201 });
        return NextResponse.json({ data: results }, { status: 201 });
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