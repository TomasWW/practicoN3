import "./App.css";
import { GetUserName } from "./componets/GetUserName";
import { Game } from "./componets/Game";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");

  const handleIngresarClick = () => {
    if (name.trim() === "") {
      setError("Por favor, ingrese un nombre válido.");
    } else {
      setCurrentStep(currentStep + 1);
      setError(""); // Limpiar el mensaje de error si el nombre es válido
    }
  };

  return (
    <div className="App">
      <div className="background">
        <header className="App-header">
          <p className="title">Piedra Papel Tijera</p>
        </header>
        {currentStep === 1 && <GetUserName name={name} setName={setName} />}

        <button onClick={handleIngresarClick}>Ingresar</button>
        {error && <p className="error-message">{error}</p>}
        {currentStep === 2 && <Game name={name} />}
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
