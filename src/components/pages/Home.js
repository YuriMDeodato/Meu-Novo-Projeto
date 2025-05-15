import styles from './Home.module.css';
import savings from '../../images/savings.svg';
import LinkBotao from '../layout/LinkBotao';
import { Link } from 'react-router-dom';

function Home(){

    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Gerenciador de Projetos</span></h1>
            <p className={styles.paragrafo}>Comece a gerar e gerenciar seu projetos agora mesmo!</p>
            <button><a href="/novoprojeto">Criar Projeto</a></button>
            <LinkBotao to="/novoprojeto" text="criar projeto" />
            <img src={savings} alt="Gerenciador de Projetos" />
        </section>
    )
}

export default Home;