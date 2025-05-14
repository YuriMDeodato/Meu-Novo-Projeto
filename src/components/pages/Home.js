import styles from './Home.module.css';

function Home(){

    return(
        <section>
            <h1>Bem-vindo ao <span>Gerenciador de Projetos</span></h1>
            <p>Comece a gerar e gerenciar seu projetos agora mesmo!</p>
            <a href="/">Criar Projeto</a>
            <img  alt="Gerenciador de Projetos" />
        </section>
    )
}

export default Home;