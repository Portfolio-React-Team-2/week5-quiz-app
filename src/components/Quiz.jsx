import { useState } from "react";
import styled from "styled-components";
import QUESTIONS from "./questions";
import DataFunc from "./DataContext";

const Quiz = () => {
  const { score, setScore, setGameState } = DataFunc();
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState("");
  // const [disabled, setDisabled] = useState(false);

  const nextPage = () => {
    setIndex((prevState) => prevState + 1);
    if (chosen === QUESTIONS[index].ans) {
      setScore((prevState) => prevState + 1);
    }
    setChosen((prevState) => "");
  };

  return (
    <QuizStyle>
      <h1>
        <span id="index"> {index + 1}. </span> {QUESTIONS[index].quest}
      </h1>
      <div className="options">
        <button onClick={() => setChosen("A")}> {QUESTIONS[index].opt1}</button>
        <button onClick={() => setChosen("B")}>{QUESTIONS[index].opt2}</button>
        <button onClick={() => setChosen("C")}>{QUESTIONS[index].opt3}</button>
        <button onClick={() => setChosen("D")}>{QUESTIONS[index].opt4}</button>
        <h1>{score}</h1>
      </div>
      <div>
        {index <= 8 && <button onClick={nextPage}>Next </button>}
        {index === 9 && (
          <button onClick={() => setGameState("end")}>Finish</button>
        )}
      </div>
    </QuizStyle>
  );
};

export default Quiz;

const QuizStyle = styled.div`
  span#index {
    font-style: oblique;
    font-size: 0.8em;
    font-size: 400;
    margin-right: 10px;
  }

  div.options {
    display: flex;
    flex-direction: column;
  }

  button {
    background-color: var(--bg-dark);
    font-weight: 800;
    margin-top: 20px;
    color: #fff;
    padding: 15px 20px;
    border-radius: 10px;
  }
`;
