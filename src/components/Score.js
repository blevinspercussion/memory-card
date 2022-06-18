import "./component_styles.css";

function Score({ score, bestScore }) {
  return (
    <div>
      <h3>Current: {score}</h3>
      <h3>Best: {bestScore}</h3>
    </div>
  );
}

export default Score;
