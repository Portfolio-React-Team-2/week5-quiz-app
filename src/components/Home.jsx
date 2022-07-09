import React from "react";
import HomeStyles from "./styles/homeStyles";

import DataFunc from "./DataContext";
import Main from "./Main";
import Quiz from "./Quiz";
import End from "./End";
import Scores from "./Scores";

const Home = () => {
  const { gameState } = DataFunc();

  return (
    <HomeStyles>
      <div className="content">
        {gameState === "main" && <Main />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <End />}
        {gameState === "scores" && <Scores />}
      </div>
    </HomeStyles>
  );
};

export default Home;
