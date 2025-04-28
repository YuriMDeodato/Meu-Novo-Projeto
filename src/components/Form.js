
function Form(){

    function cadastrarUsuario(){
        console.log("Cadastrou o usuário")
    }
    return(
        <div>
            <h1>Meu Cadastro:</h1>

            <form onSubmit={cadastrarUsuario}>
             <input type= "text" placeholder="Digite seu nome"/>
             <input type= "submit" value="Cadastrar"/>
            </form>
        </div>
    )
}

export default  Form