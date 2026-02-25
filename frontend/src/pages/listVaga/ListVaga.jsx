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
                            {/* 
                                Encaixar uma estrutura dinaminca 
                                para se moldar conforme a quantidade de vagas
                            */}

                            {/*
                            <tr>
                                <td>
                                    <h2> {vaga.cargo}
                                    <h3> {`${vaga.tipo} - ${vaga.local}`}
                                </td>
                                <td> {vaga.area} </td>
                                <td> {vaga.total} </td>
                                <td> <div> {status} </div> </td>
                                <td>
                                    <div>
                                        <i>info
                                    </div>
                                    <Link to="">
                                        <div>
                                            <i>Lixeira
                                        </div>
                                    </Link>
                                    <link to="">
                                        <div>
                                            Ver candidatos
                                        </div>
                                    </Link>
                                </td>
                            </tr>
                            */}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}