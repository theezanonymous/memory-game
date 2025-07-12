window.fetch = window.fetch.bind(window);
import Header from "./Header.jsx";
import Game from "./Game.jsx";
import { useState } from "react";
import Background from "./Background.jsx";
import "./App.css";
import cardList from "./data.js";
import StartScreen from "./StartScreen.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import SuccessScreen from "./SuccessScreen.jsx";
import {delay} from './helperFunctions.js'
export default function App() {
  // useEffect(() => {
  //     fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  //       .then(res => res.json())
  //       .then(card => console.log(card.name)); // "Furret"
  //   }, []);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [gameState, setGameState] = useState("none");
  return (
    <div className="app">
      <Header>
        <ScoreBoard score={score} highScore={highScore}></ScoreBoard>
      </Header>

      <StartScreen
        gameInProgress={gameInProgress}
        startGame={() => setGameInProgress(true)}
      ></StartScreen>

      
            <SuccessScreen gameState={gameState}></SuccessScreen>
          <Background gameInProgress = {gameInProgress} gameState = {gameState}></Background>
          {gameInProgress && (
        <><Game
            gameState = {gameState}
            cards={cardList}
            addScore={async () => {
              setScore(score + 1);
              setGameState("success");
              await delay(2000);
              setGameState("none")
            }}
            gameOver={async () => {
              setHighScore(Math.max(highScore, score));
              setScore(0);
              setGameState("gameOver");
              await delay(3000);
              setGameInProgress(false);
              await delay(3000);
              setGameState("none")
              
            }}
          ></Game>
        </>
      )}
    </div>
  );
}
