import React from "react";
import DataFunc from "./DataContext";
import Quiz from "./Quiz";

const Main = () => {
  const { gameState, setGameState } = DataFunc();
  return (
    <div>
      <h1>Coding Quiz Challenge</h1>
      <p>
        Try to answer the following elit. Quis facilis aperiam, earum sunt
        voluptatem tempora tempore expedita nihil voluptatibus alias.
      </p>
      <button onClick={() => setGameState("quiz")}>Start Quix</button>
    </div>
  );
};

export default Main;
