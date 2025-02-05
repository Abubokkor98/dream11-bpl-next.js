"use client";

import { CoinContext } from "@/app/CoinsProvider";
import { useContext } from "react";

export default function AvailableBtn() {
  const { handleActiveStatus, isActive } = useContext(CoinContext);
  return (
    <button
      className={`${
        isActive.available ? "bg-gradient-to-r from-pink-500 to-yellow-400 border-none px-4 py-2 md:px-6 md:py-3 rounded-lg" : ""
      }`}
      onClick={() => handleActiveStatus("available")}
    >
      Available
    </button>
  );
}
