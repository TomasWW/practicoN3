import "./App.css";
import { GetUserName, UserName } from "./componets/GetUserName";
import { ButtonOption } from "./componets/ButtonOption";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="title">Piedra Papel Tijera</p>
      </header>
      <GetUserName />

      <UserName  />
      <ButtonOption />

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
