import L from "./img/L.webp";
import Light from "./img/Light.webp";
import Mello from "./img/Mello.webp";
import Misa from "./img/Misa.webp";
import Near from "./img/Misa.webp";
import Rem from "./img/Rem.webp";
import Ryuk from "./img/Ryuk.webp";
import "./component_styles.css";

function Card() {
  return (
    <div className="card">
      <img src={L} alt="L"></img>
      <h2 className="card-name">L</h2>
    </div>
  );
}

export default Card;
