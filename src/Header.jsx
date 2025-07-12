import './Header.css'
export default function Header({children}){
    return(
        <h1 className = "appHeader">Pokemon Memory Game {children}</h1>
        
    )
}