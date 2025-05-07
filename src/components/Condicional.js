import {useState} from "react"
function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function cadastrar(e){
        e.preventDefault(e)
        setUserEmail(email)
    }
    function deletar(){
        setUserEmail("")
        
    }
    return(
        <>
        <h1>Cadastro de Email</h1>
        <form>
            <input type="email" placeholder="digite seu email..." onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={cadastrar} type="submit">enviar</button>
            {userEmail &&(<div><p>Email cadastrado foi o: {userEmail}</p></div>)}
            <button onClick={deletar} type="button">deletar</button>
        </form>
        </>
    )
}

export default Condicional;