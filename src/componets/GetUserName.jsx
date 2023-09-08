import React, { useState } from "react";

export const GetUserName = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const refreshName = () => {
    setName("");
  };

  return (
    <div>
      <p>
        Bienvenido:{" "}
        <strong className={name.length >= 4 ? "verde" : "rojo"}>{name}</strong>
      </p>
      <input type="text" value={name} onChange={handleChange} />

      <button onClick={refreshName}>Refresh</button>
    </div>
  );
};

export const UserName = ({ name }) => {
  return <div>{name}</div>;
};
