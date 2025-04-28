import { useState } from "react"

function Form(){


    const [name, Setname] = useState()
    const [password, setPassword] = useState()



    function cadastrarUsuario(e){
        console.log(name)
        e.preventDefault()
        console.log("Cadastrou o usuário")
    }
    return(
        <div>
            <h1>Meu Cadastro:</h1>

            <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type= "text" 
                id="name"
                name="name"
                placeholder="Digite seu nome"
                onChange={(e)=>Setname(e.target.value)}
                />
                
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input 
                type= "password" 
                id="password"
                name="password"
                placeholder="Digite seu nome"
                onChange={(e)=>setpassword(e.target.value)}
                />
            </div>
            <div>
                <input type="submit" value="Cadastrar"/>
            </div>
            </form>
        </div>
    )
}

export default  Form