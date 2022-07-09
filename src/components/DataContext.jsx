import { createContext, useState, useContext } from "react";

let INITIAL_STATE;

const DataContext = createContext(INITIAL_STATE);

export const DataProvider = ({ children }) => {
  const [gameState, setGameState] = useState("main");
  const [score, setScore] = useState(0);

  let contextData = {
    score: score,
    gameState: gameState,
    setScore: setScore,
    setGameState: setGameState,
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

const DataFunc = () => {
  return useContext(DataContext);
};

export default DataFunc;
