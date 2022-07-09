import React from "react";
import DataFunc from "./DataContext";

const End = () => {
  const { score, setScore, setGameState } = DataFunc();

  return (
    <div className="end">
      <h1>All done!</h1>
      <p>You final score is {score} out of 10 </p>
      <div>
        <button
          onClick={() => {
            setScore(0);
            setGameState("scores");
          }}
        >
          View High Scores
        </button>
        <button
          onClick={() => {
            setScore(0);
            setGameState("main");
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default End;
