import { useNavigate } from "react-router-dom"

import { Header } from "../../components/header/Header";
import { Back } from "../../components/back/Back"


export default function ListVaga(){

    const navigate = useNavigate()

    function handlePrevious(){
        navigate("/home")
    }

    return (
        <>
            <Header />
            <Back onClick={handlePrevious}/>

            

        </>
    )
}