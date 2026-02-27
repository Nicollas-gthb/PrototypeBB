import { useEffect } from "react"
import "./CandidatoModal.css"
import { api } from "../../api/axios"

export const CandidatoModal = ({ vagaId }) => {
    const [dados, setDados] = useState({})
    //dados.vaga == Objeto => {}
    //dados.candidatos == Lista => []

    useEffect(() => {
        api.get(`/vagas/${vagaId}/candidatos`).then(response => {
            setDados(response.data)
        }).catch(error => alert(`Erro ao buscar os candidatos da vaga ${vagaId}: `, error.message))
    }, [])

    return (
        <div id="candiato-main">
            <h1>Gerenciar Candidatos</h1>
            <div>
                <p>
                    {dados.vaga.cargo} - 
                    {dados.vaga.tipo} | 
                    {dados.vaga.local}
                </p>
                <div className={
                    dados.vaga.status === "ABERTA" ?
                    "dash-status-aberta" : "dash-status-encerrada"}
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
                                <td>{candidato.nome}</td>
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
                                <td>{candidato.afinidade}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}