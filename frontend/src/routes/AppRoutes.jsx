import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import Register from "../pages/register/Register"

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
            </Routes>
        </BrowserRouter>
    )
}