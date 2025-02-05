import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import NavbarWrapper from "./components/NavbarWrapper";

export default function HomePage() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <NavbarWrapper></NavbarWrapper>
      <Banner></Banner>
      <AvailablePlayers></AvailablePlayers>
    </div>
  );
}
