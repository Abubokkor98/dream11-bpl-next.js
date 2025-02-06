import { getPlayers } from "./components/AllPlayers";
import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavbarWrapper from "./components/NavbarWrapper";
import PlayersSection from "./components/PlayersSection";

export default async function HomePage() {
  const playersData = await getPlayers();

  return (
    <div>
      <NavbarWrapper />
      <main className="px-4">
        <Banner />
        <AvailablePlayers />
        <PlayersSection players={playersData} />
      </main>
      <Footer />
    </div>
  );
}
