import React, { useEffect } from "react";
import Card from "./Card";
import "./component_styles.css";

function GameBoard(props, { characters, handleClick, shuffledCharacters }) {
  useEffect(() => {}, [shuffledCharacters]);

  const cardClick = (name) => {
    console.log(props.shuffledCharacters);

    props.handleClick(name);
  };

  //   const drawCards = (characters) => {};

  return (
    <div className="gameboard">
      {props.shuffledCharacters.map((index) => (
        <Card key={index} name={index} img={index.name} cardClick={cardClick} />
      ))}
    </div>
  );
}

export default GameBoard;
