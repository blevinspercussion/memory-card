import L from "./img/L.webp";
import Light from "./img/Light.webp";
import Mello from "./img/Mello.webp";
import Misa from "./img/Misa.webp";
import Near from "./img/Misa.webp";
import Rem from "./img/Rem.webp";
import Ryuk from "./img/Ryuk.webp";
import "./component_styles.css";

function Card({ cardClick, name, img }) {
  const handleCardClick = (e) => {
    console.log(e.target.name);
    cardClick(e.target.name);
  };

  return (
    <div className="card">
      <img
        name={name}
        src={require("./img/" + name + ".webp")}
        alt={name}
        onClick={handleCardClick}
      ></img>
      <h2 className="card-name">{name}</h2>
    </div>
  );
}

export default Card;
