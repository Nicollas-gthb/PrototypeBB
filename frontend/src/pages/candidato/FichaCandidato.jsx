import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"

import "./FichaCandidato.css"
import { Header } from "../../components/header/Header"
import { Back } from "../../components/back/Back"

export default function CreateCandidate(){

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [cargoAtual, setCargoAtual] = useState("")
    const [areaAtual, setAreaAtual] = useState("")
    const [conhecimentos, setConhecimentos] = useState("")

    function handlePrevious(){
        navigate("/home")
    }

    return (
        <>

            <Header />
            <Back onClick={handlePrevious}/>


            <main id="ficha-background">
                <h1 id="ficha-titulo">Criar ficha do candidato</h1>

                <section id="ficha-section-box">

                    <form id="ficha-form">

                        <div id="ficha-form-cima">
                            <fieldset className="ficha-field">
                                <legend className="ficha-field-legend">Cargo Atual</legend>
                                <input 
                                    className="ficha-field-input"
                                    name=""
                                    value={cargoAtual}
                                    onChange={e => setCargoAtual(e.target.value)} 
                                    type="text" 
                                />
                            </fieldset>

                            <fieldset className="ficha-field">
                                <legend className="ficha-field-legend">Area Atual</legend>
                                <input 
                                    className="ficha-field-input"
                                    name=""
                                    value={areaAtual}
                                    onChange={e => setAreaAtual(e.target.value)} 
                                    type="text" 
                                />
                            </fieldset>
                        </div>

                        <div id="ficha-form-baixo">
                            <fieldset className="ficha-field">
                                <legend className="ficha-field-legend">Conhecimentos</legend>
                                <input 
                                    className="ficha-field-input"
                                    name=""
                                    value={conhecimentos}
                                    onChange={e => setConhecimentos(e.target.value)} 
                                    type="text" 
                                />
                            </fieldset>
                        </div>

                        <button 
                            className="add-submit-button"
                            type="submit"
                            disabled={loading}
                        >{loading ? "Carregando" : "Criar"}</button>

                    </form>
                </section>
            </main>
        </>
    )
}