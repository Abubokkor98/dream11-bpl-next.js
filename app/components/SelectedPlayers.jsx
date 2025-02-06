"use client";

import { useContext } from "react";
import { CoinContext } from "../CoinsProvider";
import { MdDelete } from "react-icons/md";

export default function SelectedPlayers() {
  const { choosePlayer, handlePlayerDelete, handleActiveStatus } =
    useContext(CoinContext);

  const handleAddMoreClick = () => {
    handleActiveStatus("available");
  };

  return (
    <div>
      {choosePlayer.map((player, index) => (
        <div className="p-4 rounded-lg border mb-2" key={player.playerId}>
          <div className="flex justify-between items-center">
            {/* Left side */}
            <div className="flex gap-5 items-center">
              <img
                src={player.image}
                className="w-16 h-16 rounded-md object-cover"
                alt={player.name}
              />
              <div>
                <h1 className="font-semibold text-lg">{player.name}</h1>
                <p className="text-sm">{player.role}</p>
                <p>
                  <small className="font-semibold">${player.price}</small>
                </p>
              </div>
            </div>
            {/* Right side */}
            <div className="flex items-center">
              <button onClick={() => handlePlayerDelete(player.playerId)}>
                <MdDelete className="text-2xl text-red-600" />
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Button */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-400 border-none px-4 py-2 md:px-6 md:py-3 rounded-lg"
          onClick={handleAddMoreClick}
        >
          Add More Player
        </button>
      </div>
    </div>
  );
}
