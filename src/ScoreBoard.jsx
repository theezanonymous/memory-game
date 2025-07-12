import './ScoreBoard.css'
import pb from "./pbSprite.png"
import mb from "./mbSprite.png"
export default function ScoreBoard({score, highScore}){
    return(
    <div className = "scoreBoard">
        <div>Score: {score} </div>
        <img src={pb} alt="pokeball" />
        <div>High Score: {highScore} </div>
        <img src={mb} alt="masterball" />
    </div>
    )
}