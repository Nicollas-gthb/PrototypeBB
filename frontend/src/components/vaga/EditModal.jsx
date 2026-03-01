import "./EditModal.css"

export const EditModal = ({onClose}) => {

    const handleOutSideClick = (e) => {
        if(e.target.id === "vaga-edit-background"){
            onClose()
        }
    }

    return (
        <div id="vaga-edit-background" onClick={handleOutSideClick}>
            <button id="vaga-info-close-button" onClick={onClose}>
                    <i className="bi bi-x-circle"></i>
            </button>
        </div>
    )
}