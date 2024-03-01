export async function GET() {
    const res = await fetch('https://theothai.com/tww37_webreport/API/api/weightdashboard/read.php', {
        headers: {
            'API-KEY': '857F7237C03246028748D51C97D4BADE',
        },
    })
    const data = await res.json()

    return Response.json({ data })
}