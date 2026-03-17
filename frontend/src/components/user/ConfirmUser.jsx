import "./ConfirmUser.css"

export const ConfirmUser = ({ userId, onClose }) => {

    const handleOutSideClick = (e) => {
        if(e.target.id === "confirm-user-background"){
            onClose()
        }
    }

    return (
        <div id="confirm-user-background" onClick={handleOutSideClick}>
            <div id="confirm-user-main">
                <button id="confirm-user-close-button" onClick={onClose}>
                    <i className="bi bi-x-circle"></i>
                </button>
                <h1 id="confirm-user-titulo">Confirme os dados de usuario</h1>
            </div>
        </div>
    )
}