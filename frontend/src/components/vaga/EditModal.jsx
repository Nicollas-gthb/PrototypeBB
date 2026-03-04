import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"

import "./EditModal.css"
import { api } from "../../api/axios";
import { AuthContext } from "../../contexts/AuthContext";

export const EditModal = ({ vaga, onClose }) => {

    const { token } = useContext(AuthContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    
    const [id, setId] = useState(vaga.id)
    const [area, setArea] = useState(vaga.area)
    const [cargo, setCargo] = useState(vaga.cargo)
    const [tipo, setTipo] = useState(vaga.tipo)
    const [jornada, setJornada] = useState(vaga.jornada)
    const [data_inicio, setDataInicio] = useState(vaga.data_inicio)
    const [salario, setSalario] = useState(vaga.salario)
    const [local, setLocal] = useState(vaga.local)
    const [status, setStatus] = useState(vaga.status)
    const [requisitos, setRequisitos] = useState(vaga.requisitos)
    
    
    const handleOutSideClick = (e) => {
        if(e.target.id === "vaga-edit-background"){
            onClose()
        }
    }

    
    async function handleSubmitEdit(e){
        e.preventDefault()
        setLoading(true)

        try{

            const payload = {
                area: area,
                cargo: cargo,
                jornada: parseInt(jornada),
                tipo: tipo,
                data_inicio: data_inicio,
                salario: parseFloat(salario),
                local: local,
                status: status.toUpperCase(),
                requisitos: requisitos
            }

            await api.patch(`vagas/${id}/edit`, payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            alert("Atualização enviada com sucesso!")
            navigate("/home")

        }catch(error){

            if(error.response){
                const status = error.response.status
                const mensagemBackend = error.response.data.detail
                
                if(status === 403){
                    alert(`Ação invalida: ${mensagemBackend}`)
                }else if(status === 401){
                    alert("Sua seção expirou, faça login novamente!")
                    navigate("/")
                }else{
                    alert("Erro ao atualizar esta vaga!")
                }
            }else{
                alert("Não foi possível conectar ao servidor.")
            }
        }finally{
            setLoading(false)
        }
    }

    return (
        <div id="vaga-edit-background" onClick={handleOutSideClick}>
            <div id="vaga-edit-main">
                <button id="vaga-edit-close-button" onClick={onClose}>
                        <i className="bi bi-x-circle"></i>
                </button>

                <h1 id="vaga-edit-titulo">Editar Vaga</h1>

                <form id="vaga-edit-form" onSubmit={handleSubmitEdit}>
                    <div id="vaga-edit-container">
                            <div id="vaga-edit-cima">
                                <div id="vaga-edit-direita">
                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Area</legend>
                                        <input className="vaga-edit-input"
                                            id="edit-area"
                                            
                                            value={area}
                                            onChange={e => setArea(e.target.value)}
                                            type="text" 
                                            placeholder={vaga.area}
                                        />
                                    </fieldset>
                                    
                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Cargo</legend>
                                        <input className="vaga-edit-input"
                                            id="edit-cargo"
                                            
                                            value={cargo}
                                            onChange={e => setCargo(e.target.value)}
                                            type="text" 
                                            placeholder={vaga.cargo}
                                        />
                                    </fieldset>

                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Tipo</legend>
                                        <input className="vaga-edit-input"
                                            id="edit-tipo"
                                             
                                            value={tipo}
                                            onChange={e => setTipo(e.target.value)}
                                            type="text" 
                                            placeholder={vaga.tipo}  
                                        />
                                    </fieldset>

                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Jornada</legend>
                                        <input className="vaga-edit-input"
                                            id="edit-jornada"
                                             
                                            value={jornada}
                                            onChange={e => setJornada(e.target.value)}
                                            type="number" 
                                            placeholder={vaga.jornada}  
                                        />
                                    </fieldset>
                                </div>
                                <div id="vaga-edit-esquerda">
                                    <fieldset id="edit-field-status" className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Status</legend>
                                        
                                        <div 
                                            id={
                                                status === "ABERTA" ?
                                                "edit-status-aberta-on":
                                                "edit-status-aberta-off"
                                            }
                                            className="vaga-edit-button"
                                            onClick={() => setStatus("ABERTA")}
                                        >Aberta</div>
                                        
                                        <div 
                                            id={
                                                status === "ENCERRADA" ?
                                                "edit-status-encerrada-on":
                                                "edit-status-encerrada-off"
                                            } 
                                            className="vaga-edit-button"
                                            onClick={() => setStatus("ENCERRADA")}
                                        >Encerrada</div>

                                    </fieldset>

                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Local</legend>
                                        <input className="vaga-edit-input"
                                            id="edit-local"
                                            
                                            value={local}
                                            onChange={e => setLocal(e.target.value)} 
                                            type="text" 
                                            placeholder={vaga.local} 
                                        />
                                    </fieldset>

                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Salario</legend>
                                        <input className="vaga-edit-input"
                                            id="edit-salario" 
                                            
                                            value={salario}
                                            onChange={e => setSalario(e.target.value)}
                                            type="number" 
                                            placeholder={vaga.salario}  
                                        />
                                    </fieldset>

                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Data de Inicio</legend>
                                        <input className="vaga-edit-input"
                                            id="edit-add-data"
                                            
                                            value={data_inicio}
                                            onChange={e => setDataInicio(e.target.value)}
                                            type="date" 
                                            placeholder={(vaga.data_inicio).split("-").reverse().join("/")}  
                                        />
                                    </fieldset>
                                </div>
                            </div>
                            <div id="vaga-edit-baixo">
                                <fieldset className="vaga-edit-fieldset">
                                    <legend className="vaga-edit-legend">Requisitos</legend>
                                    <input className="vaga-edit-input"
                                        id="edit-requisitos-input"
                                         
                                        value={requisitos}
                                        onChange={e => setRequisitos(e.target.value)}
                                        type="text"
                                        placeholder={vaga.requisitos}  
                                    />
                                </fieldset>

                            </div>
                        </div>

                        <button 
                            type="submit"
                            id="edit-submit-button"
                            className="add-submit-button"
                            disabled={loading}
                        >{loading ? "Carregando..." : "Enviar atualização"}</button>
                        
                </form>
            </div>
        </div>
    )
}