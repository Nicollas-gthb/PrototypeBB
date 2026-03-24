import { useNavigate } from "react-router-dom"
import { useContext } from "react"

import "./Home.css"
import { Header } from "../../components/header/Header"
import { AuthContext } from "../../contexts/AuthContext"

export default function Home(){
    const navigate = useNavigate()

    const { user } = useContext(AuthContext)

    function handleCriarVagas(){
        if(user.admin){
            navigate("/add_vaga")
        }else{
            alert("Não é adm")
        }
    }

    function handleVerVagas(){
        navigate("/list_vaga")
    }

    function handleFichaCandidato(){
        navigate("/create_candidate")
    }

    return(
        <>
            
            <Header />

            <main id="home-background">
            
                <section id="home-titulo">
                    <p>Bem Vindo</p>
                    <p id="home-titulo-username">{user.username}</p>
                    <p>O que deseja fazer?</p>
                </section>

                <section id="home-opcoes-section">
                    <div className="home-linkcard">
                        <div onClick={handleCriarVagas} className="home-opcoes">

                            <div className="home-card-titulo">
                                <i class="bi bi-file-earmark-plus"></i>
                                <h3>Adicionar Vaga</h3>
                            </div>

                            <div className="home-conteudo">
                                <p>Adicione novas vagas para funcionários do Banco do Brasil aptos a participar.</p>
                            </div>

                        </div>
                    </div>

                    <div className="home-linkcard">
                        <div onClick={handleVerVagas} className="home-opcoes">

                            <div className="home-card-titulo">
                                <i class="bi bi-journal-medical"></i>
                                <h3>Ver Vagas</h3>
                            </div>

                            <div className="home-conteudo">
                                <p>Visualize vagas de qualquer área, concluídas ou abertas.</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="home-linkcard">
                        <div onClick={handleFichaCandidato} className="home-opcoes">

                            <div className="home-card-titulo">
                                <i class="bi bi-person-vcard"></i>
                                <h3>Criar Ficha de Candidato</h3>
                            </div>

                            <div className="home-conteudo">
                                <p>Crie uma ficha de candidato para se aplicar em uma vaga.</p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}