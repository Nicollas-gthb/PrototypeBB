import { useEffect, useState } from "react"
import "./InfoModal.css"

export const InfoModal = ({ vaga, onClose}) => {

    const handleOutSideClick = (e) => {
        if(e.target.id === "vaga-info-background"){
            onClose()
        }
    }

    return (
        <div id="vaga-info-background" onClick={handleOutSideClick}>
            teste
        </div>
    )
}