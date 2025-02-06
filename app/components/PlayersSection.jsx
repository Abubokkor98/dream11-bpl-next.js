"use client";
import { useContext } from "react";
import { CoinContext } from "../CoinsProvider";
import AllPlayers from "./AllPlayers";
import SelectedPlayers from "./SelectedPlayers";

export default function PlayersSection({ players }) {
  const { isActive } = useContext(CoinContext);

  return (
    <div>
      {isActive.available ? <AllPlayers players={players} /> : <SelectedPlayers />}
    </div>
  );
}
