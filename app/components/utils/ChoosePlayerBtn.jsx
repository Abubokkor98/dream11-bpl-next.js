"use client";

import { CoinContext } from "@/app/CoinsProvider";
import React, { useContext } from "react";

export default function ChoosePlayerBtn({ player }) {
  const { handleChoosePlayer } = useContext(CoinContext);

  return (
    <button
      className="border rounded-md bg-slate-100 px-2 py-1 font-semibold hover:bg-gradient-to-r from-pink-500 to-yellow-400 transition-all"
      onClick={() => handleChoosePlayer(player)}
    >
      Choose Player
    </button>
  );
}
