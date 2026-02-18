import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../api/axios"

import "./Register.css"
import Header from "../../components/header/Header"

export default function Register(){
    
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [estado, setEstado] = useState("")
    const [admin, setAdmin] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        
        try{
            const payload = {
                nome: nome,
                email: email,
                senha: senha,
                estado: estado.toUpperCase(),
                admin: admin
            }

            const response = await api.post("/auth/create", payload)
            alert("Usuario cadastrado com sucesso!")
            navigate("/")
        }catch(error){
            alert(error.response?.data?.detail || "Erro ao realizar cadastro")
        }finally{
            setLoading(false)
        }

    }

    return (
        <>
            <Header />

            <main className="background">
                <section id="register">

                    <div id="register-box-imagem"></div>

                    <div id="register-box-formulario">

                        <h1 id="register-titulo">Faça seu cadastro</h1>

                        <form onSubmit={handleSubmit} method="post" autoComplete="on">

                            <fieldset className="register-fieldset">
                                <legend className="register-legend">Nome</legend>
                                <input 
                                    className="register-input" 
                                    id="input-nome" 
                                    type="text" 
                                    placeholder="Nome Completo" 
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                    required 
                                    maxLength="50"
                                />
                            </fieldset>

                            <fieldset className="register-fieldset">
                                <legend className="register-legend">Email</legend>
                                <input 
                                    className="register-input" 
                                    id="input-email" 
                                    type="email" 
                                    placeholder="email@dominio.com" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required 
                                    maxLength="50"
                                />
                            </fieldset>

                            <fieldset className="register-fieldset">
                                <legend className="register-legend">Senha</legend>
                                <input 
                                    className="register-input" 
                                    id="input-senha" 
                                    type="password" 
                                    placeholder="Sua Senha"
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                    required 
                                    minLength="5" 
                                    maxLength="50"
                                />
                            </fieldset>

                            <fieldset className="register-fieldset">
                                <legend className="register-legend">Estado</legend>
                                <input 
                                    className="register-input" 
                                    id="input-estado" 
                                    type="text" 
                                    placeholder="UF (Apenas a sigla)"
                                    value={estado}
                                    onChange={e => setEstado(e.target.value)}
                                    required  
                                    maxLength="2"
                                />
                            </fieldset>

                            <label id="register-switch">
                                <input
                                    id="input-admin" 
                                    type="checkbox" 
                                    checked={admin}
                                    onChange={e => setAdmin(e.target.checked)}
                                />
                                <span className="register-slider"></span>
                                <span className="register-label-text">(opcional) Ler os termos?</span>
                            </label>

                            <button 
                                className="button-enviar" 
                                type="submit" 
                                disabled={loading} 
                            >{loading ? "Carregando..." : "Cadastrar"}</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}