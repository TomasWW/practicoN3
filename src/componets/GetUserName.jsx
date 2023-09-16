import React from "react";
import clean from "../Img/clean.jpg"

export const GetUserName = ({ name, setName }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    //Validacion del input ingresado por el usuario
    const validName = inputValue.replace(/[^a-zA-Z\s]/g, "");
    setName(validName); 
  };
//Boton para borrar nombre ingresado
  const refreshName = () => {
    setName("");
  };

  return (
    <div>
      <p className="welcome">
        <h2>
          Bienvenido <br />{" "}
        </h2>
        Ingrese su nombre para poder iniciar la partida
      </p>
      <p className="name">

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Ingresa tu nombre"
      />
      <button  className="refresh"onClick={refreshName}> <img src={clean} width={30} alt="clean"/></button>
      </p>
    </div>
  );
};
