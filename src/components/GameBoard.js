import Card from "./Card";
import "./component_styles.css";

function GameBoard(props) {
  return (
    <div className="gameboard">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default GameBoard;
