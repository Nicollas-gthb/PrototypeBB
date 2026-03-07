import { useContext } from "react"

import "./ThemeToggle.css"
import { ThemeContext } from "../../contexts/ThemeContext"

export const ThemeToggle = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <button onClick={toggleTheme}>
            Modo {theme === "light" ? "Claro" : "Escuro"}
        </button>
    )
}