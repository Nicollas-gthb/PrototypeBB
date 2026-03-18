import { useEffect, useState } from "react"

import "./ConfirmUser.css"
import { api } from "../../api/axios"

export const ConfirmUser = ({ userId, onClose }) => {
    
    const [dados, setDados] = useState(null)
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true)
        if(userId){
            api.get(`user/${userId}/info`).then(response => {
                setDados(response.data)
                setLoading(false)
            }).catch(error => {
                alert(`Erro ao buscar dados do usuario : ${error.message}`)
                setLoading(false)
            })
        }
    }, [userId])
    
    
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

                {loading ? (
                    <p>
                        Carregando...
                    </p>
                ) : (
                    <>
                        <div id="confirm-user-container">
                            <div className="confirm-user-info">
                                <p className="confirm-user-textbold">Nome:</p>
                                <p>{dados?.nome}</p>
                            </div>
                            <div className="confirm-user-info">
                                <p className="confirm-user-textbold">Email:</p>
                                <p>{dados?.email}</p>
                            </div>
                            <div className="confirm-user-info">
                                <p className="confirm-user-textbold">Estado:</p>
                                <p>{dados?.estado}</p>
                            </div>
                        </div>

                        <div id="user-confirm-buttons">
                            <button className="reject-button">Fazer alteração</button>
                            <button className="confirm-button">Confirmar</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}