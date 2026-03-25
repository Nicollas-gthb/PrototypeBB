import "./Back.css"

export const Back = ({ onClick }) => {
    return(
        <div id="component-back">
            <button id="component-back-button" onClick={onClick}>
                <i className="bi bi-arrow-left"></i>
                <p id="component-back-text">Voltar</p>
            </button>
        </div>
    )
}