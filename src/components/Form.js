
function Form(){

    function cadastrarUsuario(e){
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
                placeholder="Digite seu nome"/>
            </div>
            <div>
                <label htmlFor="password"></label>
                <input type= "password" placeholder="Cadastrar sua senha"/>
            </div>
            <div>
                <input type= "submit" value="Cadastrar"/>
            </div>
            </form>
        </div>
    )
}

export default  Form