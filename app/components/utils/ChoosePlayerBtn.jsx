"use client";

import { CoinContext } from "@/app/CoinsProvider";
import React, { useContext } from "react";

export default function ChoosePlayerBtn({ player }) {
  const { handleChoosePlayer } = useContext(CoinContext);

  return (
<button
  className="border rounded-md bg-gray-600 text-white px-3 py-2 font-semibold hover:bg-gradient-to-r from-pink-500 to-yellow-400 transition-all"
  onClick={() => handleChoosePlayer(player)}
>
  Choose Player
</button>

  );
}
