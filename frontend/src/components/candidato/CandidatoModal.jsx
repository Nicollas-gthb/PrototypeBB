import { useEffect, useState } from "react"
import "./CandidatoModal.css"
import { api } from "../../api/axios"

export const CandidatoModal = ({ vagaId, onClose }) => {
    const [dados, setDados] = useState(null)
    const [loading, setLoading] = useState(true);
    //dados.vaga == Objeto => {}
    //dados.candidatos == Lista => []

    useEffect(() => {
        if(vagaId){
            setLoading(true)
            api.get(`/vagas/${vagaId}/candidatos`).then(response => {
                setDados(response.data)
                setLoading(false)
            }).catch(error => {
                alert(`Erro ao buscar os candidatos da vaga ${vagaId}: `, error.message)
                setLoading(false)
            })
        }
    }, [vagaId])

    const handleOutSideClick = (e) => {
        if(e.target.id === "candidato-background"){
            onClose()
        }
    }

    if(!vagaId) return null

    return (
        <div id="candidato-background" onClick={handleOutSideClick}>
            <div id="candiato-main">
                <button id="candidato-close-button" onClick={onClose}>
                    <i className="bi bi-x-circle"></i>
                </button>
                {loading ? (
                    <p id="candidato-mensagem-carregando">
                        Carregando...
                    </p>
                ) : (
                    <>
                        <h1 id="candidato-titulo">Gerenciar Candidatos</h1>
                        <div id="candidato-info-div">
                            <h2 id="candidato-info-vaga">
                                {dados.vaga.cargo} - {dados.vaga.tipo} | {dados.vaga.local}
                            </h2>
                            <div className={
                                dados.vaga.status === "ABERTA" ?
                                "candidato-status-aberta" : "candidato-status-encerrada"}
                            >
                                {dados.vaga.status}
                            </div>
                        </div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="th-esquerda">Nome</th>
                                        <th>Cidade</th>
                                        <th>Status</th>
                                        <th className="th-direita">Afinidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dados.candidatos.map(candidato => (
                                        <tr key={candidato.id} className="candidato-linhas">
                                            <td className="td-esquerda">{candidato.nome}</td>
                                            <td>{candidato.estado}</td>
                                            <td>
                                                <div className={
                                                    candidato.status === "CONTRATADO" ?
                                                    "candidato-status-contratado" :
                                                    candidato.status === "PENDENTE" ?
                                                    "candidato-status-pendente" : "candidato-status-rejeitado"
                                                }>
                                                    {candidato.status}
                                                </div>
                                            </td>
                                            <td td-direita>{candidato.afinidade}%</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}