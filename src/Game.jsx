import { useState , useEffect} from "react";
import Card from "./Card";
import {delay} from "./helperFunctions.js"
import './Game.css'
function randomizeCards(cards){
    let copy= [...cards]
    let shuffled = []
    while(copy.length>0){
        let idx = parseInt(Math.random()*copy.length)
        shuffled.push(copy[idx])
        copy.splice(idx, 1)
    }
    return shuffled
}
export default function Game({ addScore, gameOver,gameState, cards }) {
  let [selectedCardIds, setSelectedCardIds] = useState([]);
  let [flipped, setFlipped] = useState(false);
  let [randomCards, setRandomCards] = useState(randomizeCards(cards))
  let count = 0;
  return (
    <div className="cardContainer">
      {randomCards.map((card) => {
        count+=1;
        return(
        <Card
          style = {{display: count>10 || gameState=="gameOver"?"none":"flex"}}
          cardId = {card}
          flipped = {flipped}
          key={card}
          handleClick={async (id) => {
            if (selectedCardIds.includes(id)) {
              gameOver();
              setSelectedCardIds([])
            } else {
              setSelectedCardIds([...selectedCardIds, id]);
              addScore();
              setFlipped(true)
              await delay(1000)
              setRandomCards(randomizeCards(cards))
              await delay(500)
              setFlipped(false)
              
            }
          }}
        ></Card>)
      })}
    </div>
  );
}
