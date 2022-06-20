import Title from "./components/Title";
import Score from "./components/Score";
import GameBoard from "./components/GameBoard";

import "./App.css";
import { useState } from "react";

function App() {
  // Initialize state
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [alreadySelected, setAlreadySelected] = useState([]);

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

  const handleClick = (character) => {
    if (!alreadySelected.includes(character)) {
      scoreUp(score);
      setAlreadySelected(alreadySelected.concat(character));
    } else {
      setScore(0);
      setAlreadySelected([]);
    }
    // console.log(alreadySelected);
  };

  const shuffleCharacters = (characters) => {
    console.log(characters);
    let shuffledCharacters = characters.sort((a, b) => 0.5 - Math.random());
    console.log(shuffledCharacters);
    return shuffledCharacters;
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
        <GameBoard
          characters={characters}
          shuffleCharacters={shuffleCharacters}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
