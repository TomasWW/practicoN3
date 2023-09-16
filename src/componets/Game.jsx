import React, { useState, useEffect } from "react";
import rock from "../Img/ROCK.jpg";
import paper from "../Img/PAPER.jpg";
import scissors from "../Img/SCISSORS.jpg";
import { ScoreBoard } from "./ScoreBoard";
import { ExtendendButton } from "./ButtonDefault";

const ROCK = "Piedra";
const PAPER = "Papel";
const SCISSORS = "Tijeras";

const PC_WINS = "Ganó la PC";
const DRAW = "Empate";

export const Game = ({ name }) => {
  const [userChoice, setUserChoice] = useState("");
  const [pc, setPc] = useState("");
  const [result, setResult] = useState("Resultados");
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
        setGameWinner("¡¡Gano la PC!!");
      } else setGameWinner(`¡¡ ${name} Ganaste!! `);
    }
  }, [pcCount, userCount, name]);

  return (
    //Manejo de la eleccion del usuario
    <div className="container-choise">
      <h2>
        Bienvenido <b>{name} </b>será al mejor de 5<br />
        Por Favor, seleccioná tu mano!{" "}
      </h2>
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

      <h1>{gameWinner}</h1>

      <div className="game-grid-container">
        {userChoice !== "" && (  //Desactiva el boton 
          <ExtendendButton
            onClick={handleButtonPlay}
            className={gameActive ? "" : "button disabled"}
          >
            {" "}
            Jugar
          </ExtendendButton>
        )}

        {userChoice !== "" && (
          <div className="message">
            <strong> {name}</strong> eligió {userChoice}
          </div>
        )}
        {userChoice !== "" && (
          <div className="message">
            <strong>PC</strong> eligió {pc}
          </div>
        )}
        {userChoice !== "" && <div className="message round">{result}</div>}
      </div>
      {userChoice !== "" && pc !== "" && (
        <ScoreBoard userName={name} pcCount={pcCount} userCount={userCount} />
      )}
    </div>
  );
};
