import './Background.css'
export default function Background({gameState}){
    return (
        <div className = "background">
            <span className={"latios" +(gameState=="gameOver"? " gameOver":" gameInProgress")}></span>
            <span className={"latias" +(gameState=="gameOver"? " gameOver":" gameInProgress")}></span>
        </div>
    )
}