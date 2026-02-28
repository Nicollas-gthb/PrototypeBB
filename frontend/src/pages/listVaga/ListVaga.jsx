import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

import "./ListVaga.css"
import { Header } from "../../components/header/Header";
import { Back } from "../../components/back/Back"
import { api } from "../../api/axios";
import { CandidatoModal } from "../../components/candidato/CandidatoModal";
import { InfoModal } from "../../components/vaga/InfoModal";


export default function ListVaga(){

    const navigate = useNavigate()
    const [vagas, setVagas] = useState([])
    const [idVagaSelecionada, setidVagaSelecionada] = useState(null)
    const [vagaSelecionada, setVagaSelecionada] = useState(null)
    const [modalCandidatosAberto, setModalCandidatosAberto] = useState(false)
    const [modalAcoesAberto, setModalAcoesAberto] = useState(false)

    function handlePrevious(){
        navigate("/home")
    }

    useEffect(() => {
        api.get("/vagas/dashboard").then(response => {
            setVagas(response.data) 
        }).catch(error => alert("Erro ao buscas as vagas: ", error.message))
    }, [])

    function handleCandidatos(vaga_id){
        setidVagaSelecionada(vaga_id)
        setModalCandidatosAberto(true)
    }

    function handleClickInfo(vaga_id){
        setidVagaSelecionada(vaga_id)
        setModalAcoesAberto(true)
    }

    function handleClickEdit(vaga_id){
        setidVagaSelecionada(vaga_id)
        setModalAcoesAberto(true)
    }

    return (
        <>
            <Header />
            <Back onClick={handlePrevious}/>

            
            <main id="list-background">

                <h1 id="list-background-titulo">Gerenciar vagas</h1>

                <div id="list-vervagas">

                    <table>
                        <thead>
                            <tr>
                                <th className="th-esquerda">Cargo</th>
                                <th>Área</th>
                                <th>Candidatos</th>
                                <th>Status</th>
                                <th className="th-direita">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vagas.map(vaga => (
                                <tr key={vaga.id} className="dash-linhas">
                                    <td className="td-esquerda">
                                        <div className="dash-div">
                                            <p className="dash-cargo">{vaga.cargo}</p>
                                            <p className="dash-tipo-local">{vaga.tipo} • {vaga.local}</p>
                                        </div>
                                    </td>
                                    <td className="dash-area">{vaga.area}</td>
                                    <td onClick={() => handleCandidatos(vaga.id)} className="dash-total">{vaga.total_candidatos} cadidatos</td>
                                    <td>
                                        <div className={
                                            vaga.status === "ABERTA" ? 
                                            "dash-status-aberta" : "dash-status-encerrada"
                                        }>
                                            {vaga.status}
                                        </div>
                                    </td>
                                    <td className="dash-acoes td-direita">
                                        <button onClick={() => {
                                            handleClickInfo(vaga.id)
                                            setVagaSelecionada(vaga)
                                        }} className="dash-button">
                                            <div className="dash-button">
                                                <i className="bi bi-info-circle-fill"></i>
                                            </div>
                                        </button>
                                        <button onClick={() => {
                                            handleClickEdit(vaga.id)
                                            setVagaSelecionada(vaga)
                                        }} className="dash-button">
                                            <div className="dash-button">
                                                <i className="bi bi-pencil-square"></i>
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            {modalCandidatosAberto && (
                <CandidatoModal 
                    vagaId={idVagaSelecionada}
                    onClose={() => setModalCandidatosAberto(false)}
                />
            )}

            {modalAcoesAberto && (
                <InfoModal 
                    vagaList={vagaSelecionada}
                    onClose={() => setModalAcoesAberto(false)}
                />
            )}

            {/* {modalAcoesAberto && ()} */}
        </>
    )
}