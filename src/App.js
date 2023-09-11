import "./App.css";
import { GetUserName, UserName } from "./componets/GetUserName";
import { Game } from "./componets/Game";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <p className="title">Piedra Papel Tijera</p>
      </header>
      <GetUserName name={name} setName={setName} />

      <Game name={name} setName={setName} />

      <a
        className="App-link"
        href="../readme.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn how to play Rock-Paper-Scissors
      </a>
    </div>
  );
}

export default App;
