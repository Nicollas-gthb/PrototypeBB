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
                    <p>O que deseja fazer?</p>
                </section>

                <section id="home-opcoes-section">
                    <div className="home-linkcard">
                        <div onClick={handleCriarVagas} className="home-opcoes">
                            <img src="https://cdn-icons-png.flaticon.com/512/1091/1091585.png" alt="Adicionar Arquivo"/>

                            <div className="home-conteudo">

                                <h3>Adicionar Vaga</h3>
                                <p>Adicione novas vagas para funcionários do Banco do Brasil aptos a participar.</p>

                            </div>
                        </div>
                    </div>

                    <div className="home-linkcard">
                        <div onClick={handleVerVagas} className="home-opcoes">
                            <img src="https://cdn-icons-png.flaticon.com/512/18096/18096827.png" alt="Ver vagas"/>

                            <div className="home-conteudo">

                                <h3>Ver Vagas</h3>
                                <p>Visualize vagas de qualquer área, concluídas ou abertas.</p>

                            </div>
                        </div>
                    </div>

                    <div className="home-linkcard">
                        <div onClick={handleFichaCandidato} className="home-opcoes">
                            <img src="https://cdn-icons-png.flaticon.com/512/3597/3597104.png" alt="Editar Vagas"/>

                            <div className="home-conteudo">

                                <h3>Criar Ficha de Candidato</h3>
                                <p>Crie uma ficha de candidato para se aplicar em uma vaga.</p>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}