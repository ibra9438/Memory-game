import { useState } from "react";

export default function Header(props) {
  return (
    <div className="header">
      <div className="name">
        <h1>Memory Card Game</h1>
      </div>
      <div className="score">
        <p>Score: {props.scores.currentScore}</p>
        <p>Best score: {props.scores.bestScore}</p>
      </div>
    </div>
  );
}
