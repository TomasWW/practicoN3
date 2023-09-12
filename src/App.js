import "./App.css";
import { GetUserName } from "./componets/GetUserName";
import { Game } from "./componets/Game";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  

  return (
    <div className="App">
      <div className="background">
        <header className="App-header">
          <p className="title">Piedra Papel Tijera</p>
        </header>
        <GetUserName name={name} setName={setName} />

        <Game name={name}  />
        
      </div>
      <footer>
        <a
          className="App-link"
          href="../README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to play Rock-Paper-Scissors
        </a>
      </footer>
    </div>
  );
}

export default App;
