export async function GET() {
    const res = await fetch("https://671891927fc4c5ff8f49fcac.mockapi.io/v2")
    
    if(!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
}
