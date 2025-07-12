import './Background.css'
export default function Background({gameInProgress, gameState}){
    return (
        <div className = "background">
            {gameInProgress&&<span className={"latios" +(gameState=="gameOver"? " gameOver":" gameInProgress")}></span>}
            {gameInProgress&&<span className={"latias" +(gameState=="gameOver"? " gameOver":" gameInProgress")}></span>}
        </div>
    )
}