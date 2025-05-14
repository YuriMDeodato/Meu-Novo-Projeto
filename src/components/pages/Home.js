import styles from './Home.module.css';
import savings from '../../images/savings.svg';
function Home(){

    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Gerenciador de Projetos</span></h1>
            <p>Comece a gerar e gerenciar seu projetos agora mesmo!</p>
            <button><a href="/">Criar Projeto</a></button>
            <img src={savings} alt="Gerenciador de Projetos" />
        </section>
    )
}

export default Home;