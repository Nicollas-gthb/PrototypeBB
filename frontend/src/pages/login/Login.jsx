import { useState, useContext } from "react"
import { api } from "../../api/axios"
import { AuthContext } from "../../contexts/AuthContext"

import "./Login.css"
import Header from "../../components/header/Header"

export default function Login(){
    //quando o use context é usado, ele volta na primeira tag <AuthContext.Provider> 
    // que encontrar, e procura no value o { login }
    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)

        try{
            const response = await api.post("/auth/login", {email, senha})
            login(response.data.access_token)
        }catch(error){
            alert("Erro ao fazer login, verifique as credenciais!")
        }finally{
            setLoading(false)
        }
    }

    return (
        <>
            <Header />

            <div className="login-background">

                <main>
                    <section id="login">
                        <div id="box-formulario">

                            <h1 id="login-titulo">Faca seu login para adicionar vagas</h1>

                            <form onSubmit={handleSubmit} method="post" autoComplete="on">

                                <fieldset className="login-fieldset">
                                    <legend className="login-legend">Email</legend>
                                    <input 
                                        className="login-input" 
                                        id="input-login" 
                                        type="email" 
                                        placeholder="email@dominio.com" 
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required 
                                        maxLength="50"
                                    />
                                </fieldset>

                                <fieldset className="login-fieldset">
                                    <legend className="login-legend">Senha</legend>
                                    <input 
                                        className="login-input" 
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

                                <a className="button-esqueci" href="">Esqueci a senha</a>

                                <button 
                                    className="button-enviar" 
                                    type="submit" 
                                    disabled={loading} 
                                >{loading ? "Carregando..." : "Entrar"}</button>
                            </form>


                        </div>

                        <div id="box-imagem"></div>
                    </section>
                </main>
            </div>
        </>
    )
}