import "./App.css";
import { GetUserName } from "./componets/GetUserName";
import { Game } from "./componets/Game";
import React, { useState } from "react";
import { MenuStart } from "./componets/MenuStart";
import { ButtonDefault } from "./componets/ButtonDefault";

function App() {
  const [name, setName] = useState("");
    const [currentStep, setCurrentStep] = useState(1); //manejo de la renderizacion por etapas
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
          <ButtonDefault onClick={handleIngresarClick}> Ingresar</ButtonDefault>
        )}
        {error && <p className="error-message">{error}</p>}
        {currentStep === 2 && <Game name={name} />}
        {currentStep === 2 && (
          <ButtonDefault onClick={handleButtonRefresh}>
            {" "}
            Nuevo Juego{" "}
          </ButtonDefault>
        )}
      </div>
      <footer>
        <a // Link con acceso al Readme
          className="App-link"
          href="https://github.com/TomasWW/practicoN3/blob/main/README.md"
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
