import React from "react";
import DataFunc from "./DataContext";

const Scores = () => {
  const { score, setGameState } = DataFunc();
  console.log(score);

  return (
    <div className="scores">
      <h1>High Scores</h1>
      <div>
        <button onClick={() => setGameState("main")}>Go back</button>
        <button>Clear HighScores</button>
      </div>
    </div>
  );
};

export default Scores;
