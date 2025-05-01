import { useState } from 'react'
function Condicional(){

    function enviarEmail(e){
        e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
        setUserEmail(email); // Atualiza o estado com o e-mail digitado    
    }

    function limparEmail(){
        setUserEmail(""); // Limpa o estado do e-mail do usuário
    }

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState(); // Estado para armazenar o e-mail do usuário

    return(
        <div>
            <h2>Cadastre o seu E-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu e-mail..." onChange={(e) =>setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar E-mail</button>
            </form>
            {userEmail && ( // Renderiza o parágrafo apenas se userEmail não for nulo ou indefinido
                <p>O e-mail cadastrado foi: {userEmail}</p>
            )}
            <button onClick={limparEmail}>Deletar</button> {/* Botão para limpar o e-mail cadastrado */} 
            {userEmail ? ( // Se userEmail não for nulo ou indefinido, renderiza a mensagem abaixo
                <p>Obrigado por cadastrar o seu e-mail!</p>
            ) : ( // Caso contrário, renderiza a mensagem abaixo
                <p>Por favor, cadastre o seu e-mail.</p>
            )}  
        </div>
    )
}

export default Condicional; // Exportando o componente Condicional