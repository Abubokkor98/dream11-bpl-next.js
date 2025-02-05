import AllPlayers from "./components/AllPlayers";
import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import NavbarWrapper from "./components/NavbarWrapper";

export default function HomePage() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <NavbarWrapper />
      <Banner />
      <AvailablePlayers />
      <AllPlayers/>
    </div>
  );
}
