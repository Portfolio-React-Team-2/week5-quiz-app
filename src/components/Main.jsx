import React from "react";
import DataFunc from "./DataContext";
import styled from "styled-components";

const Main = () => {
  const { setGameState } = DataFunc();
  return (
    <MainStyle>
      <h1>Coding Quiz Challenge</h1>
      <p>
        Try to answer the following elit. Quis facilis aperiam, earum sunt
        voluptatem tempora tempore expedita nihil voluptatibus alias.
      </p>
      <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </MainStyle>
  );
};

export default Main;

const MainStyle = styled.div`
  button {
    background-color: var(--bg-dark);
    font-weight: 800;
    margin-top: 20px;
    color: #fff;
    padding: 15px 20px;
    border-radius: 10px;
  }
`;
