import React from "react";
import HomeStyles from "./styles/homeStyles";

import DataFunc from "./DataContext";
import Main from "./Main";
import Quiz from "./Quiz";
import End from "./End";

const Home = () => {
  const { gameState, setGameState } = DataFunc();

  return (
    <HomeStyles>
      <div className="content">
        {gameState === "main" && <Main />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <End />}
      </div>
    </HomeStyles>
  );
};

export default Home;
