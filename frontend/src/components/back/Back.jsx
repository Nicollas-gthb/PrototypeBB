import "./Back.css"
import back_arrow from "../../assets/back.png"

export const Back = ({ onClick }) => {
    return(
        <div id="component-back">

            <button id="component-back-button" onClick={onClick}>
                <img id="component-back-img" src={back_arrow} alt="voltar.png"/>
                <p id="component-back-text">Voltar</p>
            </button>
            
        </div>
    )
}