import { useEffect, useState } from "react";
import "./Card.css";
import TiltComponent from "./TiltComponent";
export default function Card({ cardId, handleClick, flipped, style}) {
  let [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + cardId)
      .then((res) => res.json())
      .then((card) =>
        setImageUrl(card.sprites.other.showdown["front_default"])
      ); // "Furret"
  }, [cardId]);

  let c = "flip-card" + (flipped? " flip": "")
  return (
    <TiltComponent>
      <div
        style = {style}
        className={c}
        onClick={() => {
          handleClick(cardId);
        }}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={imageUrl} alt={cardId} />
          </div>
          <div className="flip-card-back"></div>
        </div>
      </div>
    </TiltComponent>
  );
}
