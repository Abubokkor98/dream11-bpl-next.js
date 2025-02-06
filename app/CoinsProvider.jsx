"use client";

import { createContext, useState } from "react";

export const CoinContext = createContext({});

export default function CoinsProvider({ children }) {
  const [coins, setCoins] = useState(0);
  // State for chosen players
  const [choosePlayer, setChoosePlayer] = useState([]);

  // State for toggle buttons
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });

  const handleMinusCoins = (price) => {
    setCoins(coins - price);
  };

  // Money back function
  const handlePriceBack = (id) => {
    const player = choosePlayer.find((p) => p.playerId == id);
    setCoins(coins + player.price);
  };

  // Player delete function
  const handlePlayerDelete = (id) => {
    handlePriceBack(id);
    const remainingPlayers = choosePlayer.filter((p) => p.playerId !== id);
    setChoosePlayer(remainingPlayers);
    alert("Player removed");
  };

  // Credit claim function
  const handleClaimCredit = () => {
    const newCoins = coins + 9000000;
    setCoins(newCoins);
    alert("Credit added to your account");
  };

  // Active button function
  // const handleActiveStatus = (status) => {
  //   if (status === "available") {
  //     setIsActive({
  //       available: true,
  //       status: "available",
  //     });
  //   } else {
  //     setIsActive({
  //       available: false,
  //       status: "selected",
  //     });
  //   }
  // };
  const handleActiveStatus = (status) => {
    if (isActive.status !== status) {
      setIsActive({
        available: status === "available",
        status,
      });
    }
  };
  

  const handleChoosePlayer = (player) => {
    const isExist = choosePlayer.find((p) => p.playerId == player.playerId);

    if (isExist) {
      alert("Player already added");
    } else if (choosePlayer.length === 6) {
      alert("You have added the maximum number of players");
    } else if (player.price > coins) {
      alert("Not enough money to buy this player. Claim some credit");
    } else {
      handleMinusCoins(player.price);
      const newPlayer = [...choosePlayer, player];
      setChoosePlayer(newPlayer);
      alert(`Congrats! ${player.name} is now in your squad`);
    }
  };

  const coinsInfo = {
    coins,
    handleClaimCredit,
    handleChoosePlayer,
    handlePlayerDelete,
    handleActiveStatus,
    handleMinusCoins,
    handlePriceBack,
    choosePlayer,
    isActive,
  };

  return (
    <CoinContext.Provider value={coinsInfo}>{children}</CoinContext.Provider>
  );
}
