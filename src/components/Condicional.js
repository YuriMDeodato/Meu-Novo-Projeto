import { useState } from "react";

function Condicional(){

    const [email, setEmail]= useState();
    const [userEmail, setUserEmail] = useState()

    function cadastrar(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(`Cadastrou o email: ${userEmail}`)
    }
   
    return(
        <div>
            <h1>Cadastre seu Email</h1>
            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={cadastrar}>Enviar</button>
            </form>

        </div>
    )

}

export default Condicional;