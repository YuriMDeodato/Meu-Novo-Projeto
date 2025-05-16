import styles from './NovoProjeto.module.css';
import ProjetoForm from '../projetos/ProjetoForm';     

function NovoProjeto(){

    return(
        <div className={styles.novoprojeto_container}>
            <h1>CRIAR PROJETO</h1>
            <p>CRIE SEU PROJETO PARA DEPOIS ADICIONAR SERVIÇOS</p>
            <ProjetoForm />
        </div>
    )
}

export default NovoProjeto;