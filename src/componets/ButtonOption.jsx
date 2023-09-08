import React, { useState } from "react";
import rock from "../Img/ROCK.jpg";
import paper from "../Img/PAPER.jpg";
import scissors from "../Img/SCISSORS.jpg";

export const ButtonOption = () => {
  const [userChoice, setUserChoice] = useState("");
  const handleButtonClick = (value) => {
    setUserChoice(value);
  };

  return (
    <div className="container-choise" id="userSelection">
      <button
        className="playerChoice"
        onClick={() => handleButtonClick("ROCK")}
      >
        <img src={rock} width="100" height="100" alt="Rock" />
      </button>
      <button
        className="playerChoice"
        onClick={() => handleButtonClick("PAPER")}
      >
        <img src={paper} width="100" height="100" alt="Paper" />
      </button>
      <button
        className="playerChoice"
        onClick={() => handleButtonClick("SCISSORS")}
      >
        <img src={scissors} width="100" height="100" alt="Scissors" />
      </button>
      <p>
        
        {userChoice}
      </p>
    </div>
  );
};
