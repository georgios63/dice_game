import React from "react";
import { useState } from "react";
import { Player } from "./Player";

export const Scoreboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Player1", score: 0 },
    { id: 2, name: "Player2", score: 0 },
  ]);

  return (
    <div>
      <p>Scoreboard</p>
      {players.map((player) => (
        <div key={player.id}>
          <p>{player.name}</p>
          <Player />
        </div>
      ))}
    </div>
  );
};
