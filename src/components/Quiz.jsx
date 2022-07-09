import { useState, useEffect } from "react";
import styled from "styled-components";
import QUESTIONS from "./questions";



const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState("");

  // useEffect(()=>{
  //   setInterval()
  // },[chosen])

  return (
    <div className="quiz">
      <h1>{QUESTIONS[index].quest}</h1>
      <div className="options">
        <button onClick={setChosen("A")}>{QUESTIONS[index].opt1}</button>
        <button onClick={setChosen("B")}>{QUESTIONS[index].opt2}</button>
        <button onClick={setChosen("C")}>{QUESTIONS[index].opt3}</button>
        <button onClick={setChosen("D")}>{QUESTIONS[index].opt4}</button>
      </div>
    </div>
  );
};

export default Quiz;
