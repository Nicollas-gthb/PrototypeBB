import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Routes, BrowseRouter, Route, Navigate } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"

export default function AppRoutes(){
    const { token } = useContext(AuthContext)

    return (
        <BrowseRouter>
            <Routes>
                <Route path="/" element={
                    token ? <Navigate to="/home" /> : <Login />
                }/>

                <Route path="/home" element={
                    token ? <Home /> : <Navigate to="/" />
                }/>
            </Routes>
        </BrowseRouter>
    )
}