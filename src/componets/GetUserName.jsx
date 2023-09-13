import React from "react";

export const GetUserName = ({ name, setName }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Utilizamos una expresión regular para permitir solo letras y espacios
    const validName = inputValue.replace(/[^a-zA-Z\s]/g, "");
    setName(validName); // Actualizar el nombre en tiempo real
  };

  const refreshName = () => {
    setName("");
  };

  return (
    <div>
      <p className="name">
        <h2>
          Bienvenido <br />{" "}
        </h2>
        Ingrese su nombre para poder iniciar la partida
      </p>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Ingresa tu nombre"
      />
      <button onClick={refreshName}>Refresh</button>
    </div>
  );
};
