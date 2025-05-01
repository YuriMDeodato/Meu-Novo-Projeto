import { useState } from 'react'
function Condicional(){

    function enviarEmail(e){
        e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
        setUserEmail(email); // Atualiza o estado com o e-mail digitado    
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

        </div>
    )
}

export default Condicional; // Exportando o componente Condicional