import { useContext } from "react"

import "./ThemeToggle.css"
import { ThemeContext } from "../../contexts/ThemeContext"

export const ThemeToggle = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div id="theme-container">
            <button
                onClick={toggleTheme}
                id="theme-button"
            >
                {theme === "light" ? (
                    <i class="bi bi-sun-fill"></i>
                ) : (
                    <i class="bi bi-moon-stars-fill"></i>
                )}
                <p id="theme-text">Modo {theme === "light" ? "Claro" : "Escuro"}</p>
            </button>
        </div>
    )
}