import React, { useEffect } from "react";
import Card from "./Card";
import "./component_styles.css";

function GameBoard(props, { characters, handleClick }) {
  //   useEffect(() => {}, []);

  const cardClick = (name) => {
    console.log(name + 2);
    handleClick(name);
  };

  const drawCards = (characters) => {};

  return (
    <div className="gameboard">
      {props.characters.map((index, name) => (
        <Card key={index} name={index} img={index.name} />
      ))}

      {/* <Card cardClick={cardClick} />
      <Card cardClick={cardClick} />
      <Card cardClick={cardClick} />
      <Card cardClick={cardClick} />
      <Card cardClick={cardClick} />
      <Card cardClick={cardClick} />
      <Card cardClick={cardClick} />
      <Card cardClick={cardClick} /> */}
    </div>
  );
}

export default GameBoard;
