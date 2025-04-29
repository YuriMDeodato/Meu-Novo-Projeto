


import { useState } from 'react'

function Form(){
   

    function meuCadastro(e){
      e.preventDefault ()
      console.log(`Usuário Cadastrado foi o: ${name}, e a senha cadastrada foi a: ${password}`)
    }


    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
          <h1>Meu cadastro</h1>
        <form onSubmit={meuCadastro}>
          <div>
            <label htmlFor='name'>Nome:</label>
            <input type='text' id='name' name='name' placeholder='Digite seu nome'
            onChange={(e)=> setName(e.target.value)}/>
          </div>
          <div>
            <input type='password' id='password' name='password' placeholder='Digite sua senha'
            onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <input type='submit' value="cadastrar"/>
        </form>
        </div>
    )
}

export default  Form
