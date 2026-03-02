import "./LoadingScreen.css"

export const LoadingScreen = ({ children }) => {
    return (
        <div className="loading-container">
            <div className="loader">
                <i class="bi bi-arrow-clockwise"></i>
            </div>
            <p className="loading-text">{children}</p>
        </div>
    )
}