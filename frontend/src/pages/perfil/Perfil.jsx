import "./Perfil.css"
import { Back } from "../../components/back/Back"
import { Header } from "../../components/header/Header"

export default function Perfil(){

    function handlePrevious(){
        navigate("/home")
    }

    return (
        <>
            <Header />
            <Back onClick={handlePrevious}/>

            <div id="perfil-background">
                pagina de perfil
            </div>
        </>
    )
}