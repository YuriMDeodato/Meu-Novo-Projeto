import { useState } from "react";

function Condicional(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function cadastro(e){
        e.preventDefault(e);
        setUserEmail(email);
    }

    function deletar(){
        setUserEmail('');

    }


    return(
        <div>
           <h1>Cadastro de Email</h1> 

           <form>
            <input type="email" placeholder="Digite seu email" onChange={(e)=>setEmail(e.target.value)}/>
            <button type="submit" onClick={cadastro}>Enviar</button>
            {userEmail && (<div><p>O Email cadastrado é: {userEmail}</p></div>)}
            <button type="submit" onClick={deletar}>deletar</button>
           </form>
        </div>
    )
}

export default Condicional;