import { useNavigate } from "react-router-dom"

import "./ListVaga.css"
import { Header } from "../../components/header/Header";
import { Back } from "../../components/back/Back"


export default function ListVaga(){

    const navigate = useNavigate()

    function handlePrevious(){
        navigate("/home")
    }

    return (
        <>
            <Header />
            <Back onClick={handlePrevious}/>

            
            <main id="list-background">

                <h1 id="list-background-titulo">Gerenciar vagas</h1>

                <section id="vervagas">

                    <table>
                        <thead>
                            <tr>
                                <th>Cargo / Vaga</th>
                                <th>Área</th>
                                <th>Candidatos</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h2>Suporte de TI</h2>
                                    <h3>Júnior • SP</h3>
                                </td>
                                <td>Tecnologia</td>
                                <td>12 candidatos</td>
                                <td>
                                    <div class="status status-aberta">Aberta</div>
                                </td>
                                <td class="acoes">
                                    <a title="Excluir"><img src="https://cdn-icons-png.flaticon.com/512/5675/5675840.png"
                                            alt="lixeira" id="lixeira"/></a>
                                    <a href="vaga.html" title="Visualizar/Outras ações">ℹ️</a>
                                    <a class="btn-ver-candidatos" href="lista.html" title="Ver lista de candidatos">Ver
                                        Candidatos</a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h2>Analista Financeiro</h2>
                                    <h3>Pleno • DF</h3>
                                </td>
                                <td>Financeiro</td>
                                <td>45 candidatos</td>
                                <td>
                                    <div class="status status-aberta">Aberta</div>
                                </td>
                                <td class="acoes">
                                    <a title="Excluir"><img src="https://cdn-icons-png.flaticon.com/512/5675/5675840.png"
                                            alt="lixeira" id="lixeira"/></a>
                                    <a href="vaga.html" title="Visualizar/Outras ações">ℹ️</a>
                                    <a class="btn-ver-candidatos" href="lista.html" title="Ver lista de candidatos">Ver
                                        Candidatos</a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h2>Analista Financeiro</h2>
                                    <h3>Pleno • DF</h3>
                                </td>
                                <td>Financeiro</td>
                                <td>45 candidatos</td>
                                <td>
                                    <div class="status status-aberta">Aberta</div>
                                </td>
                                <td class="acoes">
                                    <a title="Excluir"><img src="https://cdn-icons-png.flaticon.com/512/5675/5675840.png"
                                            alt="lixeira" id="lixeira"/></a>
                                    <a href="vaga.html" title="Visualizar/Outras ações">ℹ️</a>
                                    <a class="btn-ver-candidatos" href="lista.html" title="Ver lista de candidatos">Ver
                                        Candidatos</a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h2>Estagiário de RH</h2>
                                    <h3>Estágio • MG</h3>
                                </td>
                                <td>Recursos Humanos</td>
                                <td>89 candidatos</td>
                                <td>
                                    <div class="status status-encerrada">Encerrada</div>
                                </td>
                                <td class="acoes">
                                    <a title="Excluir"><img src="https://cdn-icons-png.flaticon.com/512/5675/5675840.png"
                                            alt="lixeira" id="lixeira"/></a>
                                    <a href="vaga.html" title="Visualizar/Outras ações">ℹ️</a>
                                    <a class="btn-ver-candidatos" href="lista.html" title="Ver lista de candidatos">Ver
                                        Candidatos</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </section>
            </main>
        </>
    )
}