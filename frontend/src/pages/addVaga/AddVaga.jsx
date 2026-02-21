import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { api } from "../../api/axios"

import { Header } from "../../components/header/Header"
import { Back } from "../../components/back/Back"
import "./AddVaga.css"
import { AuthContext } from "../../contexts/AuthContext"

export default function AddVaga(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const [area, setArea] = useState("")
    const [cargo, setCargo] = useState("")
    const [jornada, setJornada] = useState("")
    const [tipo, setTipo] = useState("")
    const [data_inicio, setDataInicio] = useState("")
    const [salario, setSalario] = useState("")
    const [local, setLocal] = useState("")
    const [requisitos, setRequisitos] = useState("")

    const { token } = useContext(AuthContext)

    function handlePrevious(){
        navigate("/home")
    }

    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)

        try {
            const payload = {
                area: area,
                cargo: cargo,
                jornada: parseInt(jornada),
                tipo: tipo,
                data_inicio: data_inicio,
                salario: parseFloat(salario),
                local: local,
                requisitos: requisitos
            }
            
            const response = await api.post("/vagas/create", payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            alert("Vaga foi criada com sucesso!")
            navigate("/home")
        }catch(error){
            
            if(error.response){
                const status = error.response.status
                const mensagemBackend = error.response.data.detail
                
                if(status === 403){
                    alert(`Ação invalida: ${mensagemBackend}`)
                }else if(status === 401){
                    alert("Sua seção expirou, faça login novamente!")
                    navigate("/")
                }else{
                    alert("Erro ao criar esta vaga!")
                }
            }else{
                alert("Não foi possível conectar ao servidor.")
            }
        }finally{
            setLoading(false)
        }

    }

    return(
        <>
            <Header />

            <Back onClick={handlePrevious} />

            <main id="add-background">

                <h1 id="add-titulo">Adicionar nova vaga</h1>

                <section id="add-section-box">

                    <form id="add-form" onSubmit={handleSubmit}>


                        <div id="add-form-cima">

                            <div className="lados" id="esquerda">

                                <fieldset className="add-field">

                                    <legend className="add-field-legend">Área 🌐</legend>

                                    <input className="add-field-input" 
                                        id="area"
                                        name="area"
                                        value={area}
                                        onChange={e => setArea(e.target.value)}
                                        type="text" 
                                        placeholder="Ex: Administração, T.I"
                                        required
                                    />
                                </fieldset>

                                <fieldset className="add-field">
                                    <legend className="add-field-legend">Cargo 💼</legend>

                                    <input className="add-field-input" 
                                        id="cargo"
                                        name="cargo" 
                                        value={cargo}
                                        onChange={e => setCargo(e.target.value)}
                                        type="text" 
                                        placeholder="Ex: Engenheiro de Sofware"
                                        required
                                    />
                                </fieldset>

                                <fieldset className="add-field">
                                    <legend className="add-field-legend">Jornada Semanal⏰</legend>

                                    <input className="add-field-input" 
                                        id="jornada"
                                        name="jornada" 
                                        value={jornada}
                                        onChange={e => setJornada(e.target.value)}
                                        type="number" 
                                        placeholder="Ex: 80 horas" 
                                        required
                                    />

                                </fieldset>

                                <fieldset className="add-field">

                                    <legend className="add-field-legend">Local 📍</legend>

                                    <input className="add-field-input" 
                                        id="local"
                                        name="local"
                                        value={local}
                                        onChange={e => setLocal(e.target.value)}
                                        type="text" 
                                        placeholder="Ex: DF, MG, SP, ..."
                                        required
                                    />
                                </fieldset>

                            </div>

                            <div className="lados" id="direita">

                                <fieldset className="add-field">
                                    <legend className="add-field-legend">Tipo 📊</legend>

                                    <input className="add-field-input" 
                                        id="tipo"
                                        name="tipo" 
                                        value={tipo}
                                        onChange={e => setTipo(e.target.value)}
                                        type="text"
                                        placeholder="Ex: Estagiario, Junior"
                                        required
                                    />

                                </fieldset>

                                <fieldset className="add-field">
                                    <legend className="add-field-legend">Data de início 📅</legend>

                                    <input className="add-field-input" 
                                        id="add-data"
                                        name="data_inicio"
                                        value={data_inicio}
                                        onChange={e => setDataInicio(e.target.value)}
                                        type="date" 
                                        placeholder="aaaa/mm/dd"
                                        required
                                    />

                                </fieldset>

                                <fieldset className="add-field">
                                    <legend className="add-field-legend">Salário 💰</legend>

                                    <input className="add-field-input" 
                                        id="salario" 
                                        name="salario"
                                        value={salario}
                                        onChange={e => setSalario(e.target.value)}
                                        type="number" 
                                        placeholder="Ex: 2.000,00" 
                                        required
                                    />
                                </fieldset>
                            </div>
                        </div>

                        <div id="add-baixo">

                            <fieldset className="add-field" id="add-requisitos-field">

                                <legend className="add-field-legend">Principais requisitos</legend>

                                <input className="add-field-input" 
                                    id="add-requisitos-input"
                                    name="requisito" 
                                    value={requisitos}
                                    onChange={e => setRequisitos(e.target.value)}
                                    type="text"
                                    placeholder="Ex: Inglês Intermediário, C avançado" 
                                />
                            </fieldset>
                        </div>

                        <button 
                            type="submit" 
                            className="add-submit-button"
                            disabled={loading}
                        >{loading ? "Carregando..." : "Salvar Vaga"}</button>
                    </form>
                </section>
            </main>
        </>
    )
}