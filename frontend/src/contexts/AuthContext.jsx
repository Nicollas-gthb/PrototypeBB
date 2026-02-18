import { createContext, useState } from "react"

export const AuthContext = createContext()

export function AuthProvider({children}){
    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    )

    function login(newToken){
        localStorage.setItem("token", newToken)
        setToken(newToken)
    }

    function logout(){
        localStorage.removeItem("token")
        setToken(null)
    }

    return (
        //auth context provider, disponibiliza 
        // o token e as funções de login e logout para os componentes filhos
        // esses filhos são todas as telas do app, pois o provider é usado no App.jsx
        <AuthContext.Provider value={{ token, login, logout }}> 
            {children}
        </AuthContext.Provider>
    )
}