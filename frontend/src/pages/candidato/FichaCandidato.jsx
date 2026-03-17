import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"

import "./FichaCandidato.css"
import { Header } from "../../components/header/Header"
import { Back } from "../../components/back/Back"
import { ConfirmUser } from "../../components/user/ConfirmUser"
import { AuthContext } from "../../contexts/AuthContext"

export default function CreateCandidate(){

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [cargoAtual, setCargoAtual] = useState("")
    const [areaAtual, setAreaAtual] = useState("")
    const [conhecimentos, setConhecimentos] = useState("")

    const [userEditAberto, setUserEditAberto] = useState(true)

    function handlePrevious(){
        navigate("/home")
    }

    // function handleSubmit(e){
    //     e.preventDefault()
    // }

    return (
        <>

            <Header />
            <Back onClick={handlePrevious}/>

            <main id="ficha-background">
                <h1 id="ficha-titulo">Criar ficha do candidato</h1>

                <section id="ficha-section-box">

                    <form id="ficha-form" onSubmit={() => {
                        setUserEditAberto(true)
                    }}>

                        <div id="ficha-form-cima">
                            <fieldset className="ficha-field">
                                <legend className="ficha-field-legend">Cargo Atual</legend>
                                <input 
                                    className="ficha-field-input"
                                    name="cargoAtual"
                                    value={cargoAtual}
                                    onChange={e => setCargoAtual(e.target.value)} 
                                    type="text" 
                                />
                            </fieldset>

                            <fieldset className="ficha-field">
                                <legend className="ficha-field-legend">Area Atual</legend>
                                <input 
                                    className="ficha-field-input"
                                    name="areaAtual"
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
                                    name="conhecimentos"
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

            {userEditAberto && (
                <ConfirmUser 
                    userId={Number(user.id)}
                    onClose={() => {setUserEditAberto(false)}}
                /> 
            )}
        </>
    )
}