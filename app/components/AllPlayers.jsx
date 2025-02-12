import SinglePlayer from "./SinglePlayer";

export const getPlayers = async () => {
  const res = await fetch("http://localhost:3000/api/players");
  return res.json();
};

export default function AllPlayers({ players }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2 md:p-0">
        {players.map((player) => (
          <SinglePlayer key={player.playerId} player={player} />
        ))}
      </div>
    </div>
  );
}
