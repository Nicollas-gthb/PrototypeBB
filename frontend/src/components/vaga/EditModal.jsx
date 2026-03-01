import { use, useState } from "react";
import "./EditModal.css"

export const EditModal = ({ vaga, onClose }) => {

    const [loading, setLoading] = useState(false)
    
    const [area, setArea] = useState("")
    const [cargo, setCargo] = useState("")
    const [tipo, setTipo] = useState("")
    const [jornada, setJornada] = useState("")
    const [data_inicio, setDataInicio] = useState("")
    const [salario, setSalario] = useState("")
    const [local, setLocal] = useState("")
    const [status, setStatus] = useState("")
    const [requisitos, setRequisitos] = useState("")

    const handleOutSideClick = (e) => {
        if(e.target.id === "vaga-edit-background"){
            onClose()
        }
    }

    function handleSubmitEdit(e){
        // e.prevent.deafult()
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
                                            id="area"
                                            name="area"
                                            value={area}
                                            onChange={e => setArea(e.target.value)}
                                            type="text" 
                                            placeholder={vaga.area}
                                        />
                                    </fieldset>
                                    
                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Cargo</legend>
                                        <input className="vaga-edit-input"
                                            id="cargo"
                                            name="cargo"
                                            value={cargo}
                                            onChange={e => setCargo(e.target.value)}
                                            type="text" 
                                            placeholder={vaga.cargo}
                                        />
                                    </fieldset>

                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Tipo</legend>
                                        <input className="vaga-edit-input"
                                            id="tipo"
                                            name="tipo" 
                                            value={tipo}
                                            onChange={e => setTipo(e.target.value)}
                                            type="text" 
                                            placeholder={vaga.tipo}  
                                        />
                                    </fieldset>

                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Jornada</legend>
                                        <input className="vaga-edit-input"
                                            id="jornada"
                                            name="jornada" 
                                            value={jornada}
                                            onChange={e => setJornada(e.target.value)}
                                            type="number" 
                                            placeholder={vaga.jornada}  
                                        />
                                    </fieldset>
                                </div>
                                <div id="vaga-edit-esquerda">
                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Status</legend>
                                        <input className="vaga-edit-input"
                                            id="status"
                                            name="status"
                                            value={status}
                                            onChange={e => setStatus(e.target.value)} 
                                            type="text" 
                                            placeholder={vaga.status} 
                                        />
                                    </fieldset>

                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Local</legend>
                                        <input className="vaga-edit-input"
                                            id="local"
                                            name="local"
                                            value={local}
                                            onChange={e => setLocal(e.target.value)} 
                                            type="text" 
                                            placeholder={vaga.local} 
                                        />
                                    </fieldset>

                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Salario</legend>
                                        <input className="vaga-edit-input"
                                            id="salario" 
                                            name="salario"
                                            value={salario}
                                            onChange={e => setSalario(e.target.value)}
                                            type="number" 
                                            placeholder={vaga.salario}  
                                        />
                                    </fieldset>

                                    <fieldset className="vaga-edit-fieldset">
                                        <legend className="vaga-edit-legend">Data de Inicio</legend>
                                        <input className="vaga-edit-input"
                                            id="add-data"
                                            name="data_inicio"
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
                                        id="add-requisitos-input"
                                        name="requisito" 
                                        value={requisitos}
                                        onChange={e => setRequisitos(e.target.value)}
                                        type="text"
                                        placeholder={vaga.requisitos}  
                                    />
                                </fieldset>

                                <button 
                                    type="submit"
                                    className="add-submit-button"
                                    disabled={loading}
                                >
                                    {loading ? "Carregando..." : "Enviar atualização"}
                                </button>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    )
}