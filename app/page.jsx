import  { getPlayers } from "./components/AllPlayers";
import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import NavbarWrapper from "./components/NavbarWrapper";
import PlayersSection from "./components/PlayersSection";

export default async function HomePage() {
  const playersData = await getPlayers(); 

  return (
    <div>
      <NavbarWrapper />
      <Banner />
      <AvailablePlayers />
      <PlayersSection players={playersData} />
    </div>
  );
}
