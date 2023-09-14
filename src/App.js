import "./App.css";
import { GetUserName } from "./componets/GetUserName";
import { Game } from "./componets/Game";
import React, { useState } from "react";
import { MenuStart } from "./componets/MenuStart";

function App() {
  const [name, setName] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");
  const handleButtonRefresh = () => {
    setCurrentStep(currentStep - 1);
    setName("");
  };
  const handleIngresarClick = () => {
    if (name.trim() === "") {
      setError("Por favor, ingrese un nombre válido.");
    } else {
      setCurrentStep(currentStep + 1);
      setError(""); // Limpiar el mensaje de error si el nombre es válido
    }
  };

  return (
    //agrego manejo de renderizacion para mejorar experiencia del usuario
    <div className="App">
      <div className="background">
        {currentStep === 1 && <MenuStart />}
        {currentStep === 1 && <GetUserName name={name} setName={setName} />}

        {currentStep === 1 && (
          <button className="inputName" onClick={handleIngresarClick}>
            Ingresar
          </button>
        )}
        {error && <p className="error-message">{error}</p>}
        {currentStep === 2 && <Game name={name} />}
        {currentStep === 2 && (
          <button className="newgame" onClick={handleButtonRefresh}>
            Nuevo juego
          </button>
        )}
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
