import "./Header.css"
import logo from "../../assets/bb_logo.svg"

import { ThemeToggle } from "../theme/ThemeToggle"
import { LogoutButton } from "../logout/LogoutButton"
import { PerfilButton } from "../perfil/PerfilButton"

export const Header = () => {
    return(
        <header id="component-header">

            <div id="component-header-left">
                <img id="component-header-img" src={logo} alt="logo" />
            </div>

            <nav id="component-header-right">    
                <ThemeToggle />
                <PerfilButton />
                <LogoutButton />
            </nav>
        </header>
    )
}
