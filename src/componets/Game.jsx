import React, { useState } from "react";
import rock from "../Img/ROCK.jpg";
import paper from "../Img/PAPER.jpg";
import scissors from "../Img/SCISSORS.jpg";

const ROCK = "Piedra";
const PAPER = "Papel";
const SCISSORS = "Tijeras";

const PC_WINS = "Gano la PC";
const DRAW = "Empate";

export const Game = ({ name, setName }) => {
  const [userChoice, setUserChoice] = useState("");
  const [pc, setPc] = useState("");
  const [result, setResult] = useState("");
  const handleButtonClick = (value) => {
    setUserChoice(value);
  };

  const handleButtoPlay = () => {
    let num = Math.random() * 3;
    let round = Math.round(num);

    let pcChoice;
    if (round === 0) {
      pcChoice = ROCK;
    } else if (round === 1) {
      pcChoice = PAPER;
    } else pcChoice = SCISSORS;

    setPc(pcChoice);

    if (pcChoice === userChoice) {
      setResult(DRAW);
      console.log(userChoice, pcChoice);
    } else if (
      (userChoice === ROCK && pcChoice === SCISSORS) ||
      (userChoice === SCISSORS && pcChoice === PAPER) ||
      (userChoice === PAPER && pcChoice === ROCK)
    ) {
      setResult(`Gano: ${name}`);
      console.log(userChoice, pcChoice);
    } else {
      setResult(PC_WINS);
      console.log(userChoice, pcChoice);
    }
  };

  return (
    <div className="container-choise" id="userSelection">
      <button className="playerChoice" onClick={() => handleButtonClick(ROCK)}>
        <img src={rock} width="100" height="100" alt="Rock" />
      </button>
      <button className="playerChoice" onClick={() => handleButtonClick(PAPER)}>
        <img src={paper} width="100" height="100" alt="Paper" />
      </button>
      <button
        className="playerChoice"
        onClick={() => handleButtonClick(SCISSORS)}
      >
        <img src={scissors} width="100" height="100" alt="Scissors" />
      </button>
      <p>{userChoice}</p>
      <button onClick={handleButtoPlay}> Play</button>
      <p> PC eligio: {pc}</p>
      <p> {result}</p>
    </div>
  );
};
