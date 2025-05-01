import { useState } from "react";

function Condicional(){

    const [email, setEmail]= useState();
    const [userEmail, setUserEmail] = useState()

    function cadastrar(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(`Cadastrou o email: ${userEmail}`)
    }

    function deletar(e){
        setUserEmail('')
    }
   
    return(
        <div>
            <h1>Cadastre seu Email</h1>
            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={cadastrar}>Enviar</button>
                {userEmail &&(<div><p>O email cadastrado foi o: {userEmail}</p></div>)}
                <button type="submit" onClick={deletar}>Deletar</button>
            </form>

        </div>
    )

}

export default Condicional;