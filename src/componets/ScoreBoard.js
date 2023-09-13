import React from "react";

export function ScoreBoard({ userName, userCount, pcCount }) {
  return (
    <div className="scoreboard">
      <div className="title"> Tablero de puntajes </div>
      <div className="grid-container">
        <div className="player"> {userName} </div>
        <div className="score"> {userCount} </div>
        <div className="player"> PC</div>
        <div className="score">{pcCount} </div>
      </div>
    </div>
  );
}
