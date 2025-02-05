"use client";

import { CoinContext } from "@/app/CoinsProvider";
import { useContext } from "react";

export default function APsubtitle() {
  const { isActive, choosePlayer } = useContext(CoinContext);
  return (
    <h1 className="font-bold text-xl md:text-2xl text-center">
      {isActive.available
        ? "Available Players"
        : `Selected Player (${choosePlayer.length}/6)`}
    </h1>
  );
}
