import Title from "./components/Title";
import Score from "./components/Score";
import GameBoard from "./components/GameBoard";
import "./App.css";
import { useState } from "react";

function App() {
  // Initialize state
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Define props
  const characters = ["L", "Light", "Mello", "Misa", "Near", "Rem", "Ryuk"];

  // Functions
  const scoreUp = (score) => {
    setScore((score += 1));
    bestScoreCheck(score);
  };

  const bestScoreCheck = (score, bestScore) => {
    if (score >= bestScore) {
      setBestScore(score);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <Title />
        <Score
          className="score"
          score={score}
          bestScore={bestScore}
          scoreUp={scoreUp}
        />
      </div>
      <div>
        <GameBoard characters={characters} />
      </div>
    </div>
  );
}

export default App;
