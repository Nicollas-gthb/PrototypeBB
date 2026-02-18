import "./Header.css"
import logo from "../../assets/bb_logo.svg"

export default function Header(){
    return(
        <header id="component-header">
            <img id="component-header-img" src={logo} alt="logo" />
        </header>
    )
}
