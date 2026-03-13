import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";

import "./ListVaga.css"
import { Header } from "../../components/header/Header";
import { Back } from "../../components/back/Back"
import { api } from "../../api/axios";
import { CandidatoModal } from "../../components/candidato/CandidatoModal";
import { InfoModal } from "../../components/vaga/InfoModal";
import { EditModal } from "../../components/vaga/EditModal";
import { AuthContext } from "../../contexts/AuthContext";
import { LoadingScreen } from "../../components/loading/LoadingScreen";


export default function ListVaga(){

    const { user, loading } = useContext(AuthContext)
    

    const navigate = useNavigate()
    const [vagas, setVagas] = useState([])
    const [idVagaSelecionada, setidVagaSelecionada] = useState(null)
    const [vagaSelecionada, setVagaSelecionada] = useState({})
    const [modalCandidatosAberto, setModalCandidatosAberto] = useState(false)
    const [modalInfoAberto, setModalInfoAberto] = useState(false)
    const [modalEditAberto, setModalEditAberto] = useState(false)

    function handlePrevious(){
        navigate("/home")
    }

    
    useEffect(() => {
        api.get("/vagas/dashboard").then(response => {
            setVagas(response.data) 
        }).catch(error => alert("Erro ao buscas as vagas: ", error.message))
    }, [])
    
    if(loading){
        return <LoadingScreen>Carregando Permissões ...</LoadingScreen>
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

                                    <td onClick={() => {
                                        setidVagaSelecionada(vaga.id)
                                        setModalCandidatosAberto(true)
                                    }} className="dash-total">{vaga.total_candidatos} cadidatos</td>

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
                                            setModalInfoAberto(true)
                                            setVagaSelecionada(vaga)
                                        }} className="dash-button">
                                            <div>
                                                <i className="bi bi-info-circle-fill"></i>
                                            </div>
                                        </button>

                                        { user?.admin && (
                                            <>
                                                <button onClick={() => {
                                                    setModalEditAberto(true)
                                                    setVagaSelecionada(vaga)
                                                }} className="dash-button">
                                                    <div>
                                                        <i className="bi bi-pencil-square"></i>
                                                    </div>
                                                </button>
                                            </>
                                        )}

                                        { !user?.admin && (
                                            <>
                                                <button className="dash-button">
                                                    <div>
                                                        <i class="bi bi-person-add"></i>
                                                    </div>
                                                </button>
                                            </>
                                        )}
                                        
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

            {modalInfoAberto && (
                <InfoModal 
                    vagaList={vagaSelecionada}
                    onClose={() => setModalInfoAberto(false)}
                />
            )}

            {modalEditAberto && (
                <EditModal
                    vaga={vagaSelecionada}
                    onClose={() => setModalEditAberto(false)} 
                />
            )}
        </>
    )
}