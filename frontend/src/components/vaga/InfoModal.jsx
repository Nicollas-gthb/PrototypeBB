import { useEffect, useState } from "react"
import "./InfoModal.css"

export const InfoModal = ({ vagaList, onClose }) => {

    const handleOutSideClick = (e) => {
        if(e.target.id === "vaga-info-background"){
            onClose()
        }
    }

    return (
        
        <div id="vaga-info-background" onClick={handleOutSideClick}>
             
            <div id="vaga-info-main">
                <button id="vaga-info-close-button" onClick={onClose}>
                    <i className="bi bi-x-circle"></i>
                </button>

                <h1 id="vaga-info-titulo">Informações da Vaga</h1>

                {vagaList && (
                    <>
                        <div id="vaga-info-container">
                            <div id="vaga-info-cima">
                                <div id="vaga-info-direita">
                                    <fieldset className="vaga-info-fieldset">
                                        <legend className="vaga-info-legend"></legend>
                                        <p className="vaga-info-content">
                                            {vagaList.cargo}
                                        </p>
                                    </fieldset>

                                    <fieldset className="vaga-info-fieldset">
                                        <legend className="vaga-info-legend"></legend>
                                        <p className="vaga-info-content">
                                            {vagaList.tipo}
                                        </p>
                                    </fieldset>

                                    <fieldset className="vaga-info-fieldset">
                                        <legend className="vaga-info-legend"></legend>
                                        <p className="vaga-info-content">
                                            {vagaList.jornada}
                                        </p>
                                    </fieldset>
                                </div>
                                <div id="vaga-info-esquerda">
                                    <fieldset className="vaga-info-fieldset">
                                        <legend className="vaga-info-legend"></legend>
                                        <p className="vaga-info-content">
                                            {vagaList.local}
                                        </p>
                                    </fieldset>

                                    <fieldset className="vaga-info-fieldset">
                                        <legend className="vaga-info-legend"></legend>
                                        <p className="vaga-info-content">
                                            {vagaList.salario}
                                        </p>
                                    </fieldset>

                                    <fieldset className="vaga-info-fieldset">
                                        <legend className="vaga-info-legend"></legend>
                                        <p className="vaga-info-content">
                                            {vagaList.data_inicio}
                                        </p>
                                    </fieldset>
                                </div>
                            </div>
                            <div id="vaga-info-baixo">
                                <fieldset className="vaga-info-fieldset">
                                    <legend className="vaga-info-legend"></legend>
                                    <p className="vaga-info-content">
                                        {vagaList.requisitos}
                                    </p>
                                </fieldset>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}