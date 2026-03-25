import "./PerfilButton.css";
import { useNavigate } from "react-router-dom";

export const PerfilButton = () => {
    const navigate = useNavigate();

    function handleProfile(){
        navigate("/perfil")
    }

    return (
        <div id="perfil-container">
            <button id="perfil-button" onClick={handleProfile}>
                <i className="bi bi-person-circle"></i>
                <p id="perfil-text">Perfil</p>
            </button>
        </div>
    )
}