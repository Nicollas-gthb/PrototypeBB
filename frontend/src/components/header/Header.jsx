import { useContext } from "react"
import { useNavigate } from "react-router-dom"


import "./Header.css"
import logo from "../../assets/bb_logo.svg"
import { ThemeToggle } from "../theme/ThemeToggle"
import { LogoutButton } from "../logout/LogoutButton"
import { PerfilButton } from "../perfil/PerfilButton"
import { AuthContext } from "../../contexts/AuthContext"

export const Header = () => {

    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleLogout(){
        logout()
        navigate("/")
    }

    return(
        <header id="component-header">

            <div id="component-header-left">
                <img id="component-header-img" src={logo} alt="logo" />
            </div>

            <nav id="component-header-right">    
                <ThemeToggle />
                <PerfilButton />
                <LogoutButton onCLick={handleLogout}/>
            </nav>
        </header>
    )
}
