import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom"

import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import Register from "../pages/register/Register"
import AddVaga from "../pages/addVaga/AddVaga"
import ListVaga from "../pages/listVaga/ListVaga"
import CreateCandidate from "../pages/candidato/FichaCandidato"
import Perfil from "../pages/perfil/Perfil"

export default function AppRoutes(){
    const { token } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    token ? <Navigate to="/home" /> : <Login />
                }/>

                <Route path="/home" element={
                    token ? <Home /> : <Navigate to="/" />
                }/>

                <Route path="/register" element={
                    <Register />
                }/>

                <Route path="/add_vaga" element={
                    token ? <AddVaga /> : <Navigate to="/" />
                }/>

                <Route path="/list_vaga" element={
                    <ListVaga />
                }/>

                <Route path="/create_candidate" element={
                    <CreateCandidate />
                }/>

                <Route path="/perfil" element={
                    <Perfil />
                }/>
            </Routes>
        </BrowserRouter>
    )
}