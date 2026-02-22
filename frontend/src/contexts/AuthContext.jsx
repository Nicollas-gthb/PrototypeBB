import { createContext, useState } from "react"

export const AuthContext = createContext()

export function AuthProvider({children}){
    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    )
    const [user, setUser] = useState(null)

    function login(newToken, user){
        localStorage.setItem("token", newToken)
        //stringify -> converte o objeto em uma string para ser salva no localStorage
        localStorage.setItem("user", JSON.stringify(user))
        setToken(newToken)
        setUser(user)
    }

    function logout(){
        localStorage.removeItem("token")
        setToken(null)
    }

    return (
        //auth context provider, disponibiliza 
        // o token e as funções de login e logout para os componentes filhos
        // esses filhos são todas as telas do app, pois o provider é usado no App.jsx
        <AuthContext.Provider value={{ token, user, login, logout }}> 
            {children}
        </AuthContext.Provider>
    )
}