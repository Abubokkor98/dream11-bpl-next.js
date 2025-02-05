"use client";

import { CoinContext } from "@/app/CoinsProvider";
import React, { useContext } from "react";

export default function HandleClaimCredit() {
  const { handleClaimCredit } = useContext(CoinContext);
  return (
    <button
      onClick={handleClaimCredit}
      className="bg-gradient-to-r from-pink-500 to-yellow-400 border-none px-4 py-2 md:px-6 md:py-3 rounded-lg"
    >
      Claim Free Credit
    </button>
  );
}
