import './SuccessScreen.css'
export default function SuccessScreen({gameState}){

    return(
        <div 
        style ={{backgroundColor:gameState=="success"?"lightGreen":"red"}} 
        className={gameState == "none"?"successScreen": "successScreen show"}>{gameState=="success"?"+1 Point!":gameState=="gameOver"?"Game Over":""}</div>
    )
}