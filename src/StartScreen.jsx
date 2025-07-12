import "./StartScreen.css";
import pbTop from "./pbTop.png";
import { delay } from "./helperFunctions.js";
import pbBottom from "./pbBottom.png";
import { useState } from "react";
export default function StartScreen({ gameInProgress, startGame }) {
  //   let [hideStartScreen, setHideStartScreen] = useState(false);
  let c = "startScreen " + (gameInProgress ? "hide" : "show");

  return (

      <div
        className={c}
        onClick={async () => {
          startGame();

          // setHideStartScreen(true);
        }}
      >
        <div
          className="startText"
          style={{ display: gameInProgress ? "none" : "block" }}
        >
          Goal: Don't Catch the Same Pokemon Twice! <br></br>
          <div className="clickAnywhere"> Click Anywhere To Start</div>
         
        </div>
        <div className="startTop">
          <img src={pbTop} alt="" className="pbTop" />
        </div>
        <div className="startBottom">
          <img src={pbBottom} alt="" className="pbBottom" />
        </div>
      </div>

  );
}
