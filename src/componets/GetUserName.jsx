import React from "react";

export const GetUserName = ({ name, setName }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Utilizamos una expresión regular para permitir solo letras y espacios
    const validName = inputValue.replace(/[^a-zA-Z\s]/g, "");
    setName(validName);
  };

  const refreshName = () => {
    setName("");
  };

  const handleBlur = () => {
    if (name !== "") {
      // Verificar si el nombre contiene caracteres no alfabéticos
      const isNameValid = /^[a-zA-Z\s]+$/.test(name);
      if (!isNameValid) {
        alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
        setName(""); // Restablecer el nombre
      }
    }
  };

  return (
    <div>
      <p className="name">
        Bienvenido: <strong>{name}</strong>
      </p>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Ingresa tu nombre"
        
      />
      <button onClick={refreshName}>Refresh</button>
    </div>
  );
};
