// app/components/AllPlayers.jsx
export const getPlayers = async () => {
    const res = await fetch("http://localhost:3000/api/players");
    return res.json();
  };
  
  export default async function AllPlayers() {
    const players = await getPlayers();
    return <div>AllPlayers {players.length}</div>;
  }
  