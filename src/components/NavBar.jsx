import React from "react";
import NavBarStyles from "./styles/navStyles";
import { FaHandPointLeft } from "react-icons/fa";
import DataFunc from "./DataContext";

const NavBar = () => {
  let timer = "19";
  const { setGameState } = DataFunc();

  return (
    <NavBarStyles>
      <div className="all-score">
        <p onClick={() => setGameState("scores")}>
          View Highscores <FaHandPointLeft className="hand" size={20} />{" "}
        </p>
      </div>
      <div>Time: {timer} </div>
    </NavBarStyles>
  );
};

export default NavBar;
