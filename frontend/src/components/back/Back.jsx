import { useNavigate } from 'react-router-dom';

import "./Back.css"
import back_arrow from "../../assets/back.png"

export const Back = ({ onClick }) => {
    return(
            <div >

                <button id="component-back-button" onClick={onClick}>
                    <img id="component-back-img" src={back_arrow} alt="voltar.png"/>
                    <p>Voltar</p>
                </button>
                
            </div>
    )
}