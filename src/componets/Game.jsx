import React, { useState, useEffect } from "react";
import rock from "../Img/ROCK.jpg";
import paper from "../Img/PAPER.jpg";
import scissors from "../Img/SCISSORS.jpg";
import { ScoreBoard } from "./ScoreBoard";

const ROCK = "Piedra";
const PAPER = "Papel";
const SCISSORS = "Tijeras";

const PC_WINS = "Gano la PC";
const DRAW = "Empate";

export const Game = ({ name }) => {
  const [userChoice, setUserChoice] = useState("");
  const [pc, setPc] = useState("");
  const [result, setResult] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [pcCount, setPcCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [gameActive, setGameActive] = useState(true);
  const [gameWinner, setGameWinner] = useState(null);

  const handleButtonClick = (value) => {
    setUserChoice(value);
    setSelectedOption(value);
  };

  const handleButtonPlay = () => {
    if (gameActive) {
      //manejo aleatorio de la PC
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
        //reglas del juego
        setResult(DRAW);
      } else if (
        (userChoice === ROCK && pcChoice === SCISSORS) ||
        (userChoice === SCISSORS && pcChoice === PAPER) ||
        (userChoice === PAPER && pcChoice === ROCK)
      ) {
        setResult(`Gano: ${name}`);
        setUserCount(userCount + 1);
      } else {
        setResult(PC_WINS);
        setPcCount(pcCount + 1);
      }
    }
  };

  useEffect(() => {
    //manejo de las partidas
    if (pcCount === 3 || userCount === 3) {
      setGameActive(false);
      if (pcCount > userCount) {
        setGameWinner("Gano PC");
      } else setGameWinner(`Gano: ${name}`);
    }
  }, [pcCount, userCount, name]);

  return (
    //Manejo de la eleccion del usuario
    <div className="container-choise">
      <p>
        Bienvenido {name} será al mejor de 5<br />
        Por Favor, selecciona tu mano!{" "}
      </p>
      <button
        className={`playerChoice ${selectedOption === ROCK ? "selected" : ""}`}
        onClick={() => handleButtonClick(ROCK)}
      >
        <img src={rock} width="100" height="100" alt="Rock" />
      </button>
      <button
        className={`playerChoice ${selectedOption === PAPER ? "selected" : ""}`}
        onClick={() => handleButtonClick(PAPER)}
      >
        <img src={paper} width="100" height="100" alt="Paper" />
      </button>
      <button
        className={`playerChoice ${
          selectedOption === SCISSORS ? "selected" : ""
        }`}
        onClick={() => handleButtonClick(SCISSORS)}
      >
        <img src={scissors} width="100" height="100" alt="Scissors" />
      </button>

      <div className="game-grid-container">
        {userChoice !== "" && (
          <button onClick={handleButtonPlay} className="button">
            Play
          </button>
        )}
        {userChoice !== "" && (
          <div className="message">
            {name} seleccionó: {userChoice}
          </div>
        )}
        {userChoice !== "" && <div className="message">PC eligió: {pc}</div>}
        {userChoice !== "" && <div className="message">{result}</div>}
      </div>

      <ScoreBoard userName={name} pcCount={pcCount} userCount={userCount} />

      <h1>{gameWinner}</h1>
    </div>
  );
};
