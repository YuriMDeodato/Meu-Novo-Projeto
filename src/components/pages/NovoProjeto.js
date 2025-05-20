import styles from './NovoProjeto.module.css';
import ProjetoForm from '../projetos/ProjetoForm';   
import { useNavigate } from 'react-router-dom';              


function NovoProjeto(){

    const navigate = useNavigate();


    function createPost(projeto){
        // initialize the project Projetinhos
        projeto.cost = 0
        projeto.servicos = []

        fetch('http://localhost:5000/projetos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projeto),
        }) .then((resposta) => resposta.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => console.log (error));
    }
    return(
        <div className={styles.novoprojeto_container}>
            <h1>CRIAR PROJETO</h1>
            <p>CRIE SEU PROJETO PARA DEPOIS ADICIONAR SERVIÇOS</p>
            <ProjetoForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NovoProjeto;