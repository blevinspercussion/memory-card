import Title from "./components/Title";
import Score from "./components/Score";
import GameBoard from "./components/GameBoard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Title />
        <Score />
      </div>
      <div>
        <GameBoard />
      </div>
    </div>
  );
}

export default App;
