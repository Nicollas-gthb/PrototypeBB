import "./Back.css"
import { useNavigate } from "react-router-dom"

export const Back = () => {
    const navigate = useNavigate()

    function handlePrevious(){
        navigate("/home")
    }

    return(
        <div id="component-back">
            <button id="component-back-button" onClick={handlePrevious}>
                <i className="bi bi-arrow-left"></i>
                <p id="component-back-text">Voltar</p>
            </button>
        </div>
    )
}