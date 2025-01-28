"use client";

import { useContext } from "react";
import { CoinContext } from "../CoinsProvider";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const { coins } = useContext(CoinContext);

  return <Navbar coins={coins} />;
}
