import "./Header.css"
import logo from "../../assets/bb_logo.svg"

export const Header = () => {
    return(
        <header id="component-header">
            <img id="component-header-img" src={logo} alt="logo" />
        </header>
    )
}
