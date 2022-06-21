import Title from "./components/Title";
import Score from "./components/Score";
import GameBoard from "./components/GameBoard";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // Initialize state
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [alreadySelected, setAlreadySelected] = useState([]);
  const [shuffledCharacters, setShuffledCharacters] = useState([]);

  // Define props
  const characters = [
    "L",
    "Light",
    "Matt",
    "Mello",
    "Misa",
    "Near",
    "Rem",
    "Ryuk",
    "Teru",
    "Wedy",
    "Yuri",
  ];

  // Functions
  const scoreUp = (score) => {
    setScore((score += 1));
    bestScoreCheck(score, bestScore);
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
    shuffleCharacters(characters);
    // console.log(alreadySelected);
  };

  const shuffleCharacters = (characters, shuffledCharacters) => {
    shuffledCharacters = setShuffledCharacters(
      characters.sort((a, b) => 0.5 - Math.random())
    );
    return shuffledCharacters;
  };

  useEffect(() => {
    shuffleCharacters(characters, shuffleCharacters);
    console.log(shuffledCharacters);
  }, []);

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
      <hr />
      <div>
        <GameBoard
          className="gameboard"
          characters={characters}
          shuffleCharacters={shuffleCharacters}
          handleClick={handleClick}
          shuffledCharacters={shuffledCharacters}
        />
      </div>
    </div>
  );
}

export default App;
