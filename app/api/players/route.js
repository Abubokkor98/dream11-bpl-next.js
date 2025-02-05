// app/api/players/route.js
export async function GET() {
    const res = await fetch("http://localhost:3000/playersData.json");
    const playersData = await res.json();
  
    return new Response(JSON.stringify(playersData))
  }
  