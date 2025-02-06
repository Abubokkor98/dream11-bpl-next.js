"use client";
import { useContext } from "react";
import { CoinContext } from "./context/CoinsProvider";

export default function PlayersSection() {
  const { isActive } = useContext(CoinContext);
  return children(isActive);
}
