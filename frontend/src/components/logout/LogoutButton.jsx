import "./LogoutButton.css"

export const LogoutButton = ({onCLick}) => {

    return (
        <div id="component-logout">
            <button id="component-logout-button" onClick={onCLick}>
                <p id="component-logout-text" >Log out</p>
                <i id="component-logout-icon" className="bi bi-box-arrow-right" style={{fontSize: 30}}></i>
            </button>
        </div>
    )
}