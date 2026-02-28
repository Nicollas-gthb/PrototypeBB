import { useEffect, useState } from "react"
import "./InfoModal.css"

export const InfoModal = ({ vagaList, onClose}) => {

    const handleOutSideClick = (e) => {
        if(e.target.id === "vaga-info-background"){
            onClose()
        }
    }

    return (
        
        <div id="vaga-info-background" onClick={handleOutSideClick}>
            {vagaList && (
                <>
                    <div className="vaga-info-main">
                        <button id="vaga-info-close-button" onClick={onClose}>
                            <i className="bi bi-x-circle"></i>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}