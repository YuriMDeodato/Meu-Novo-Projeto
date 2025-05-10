import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import Container from "../layout/Container";
function NavBar(){

    return(
        
        <nav className={styles.navbar}>
            <Container className={styles.container}>
            <Link to='/'>Home</Link>
            <Link to='/novoprojeto'>Projetos</Link>
            <Link to='/contato'>Contato</Link>
            <Link to='/empresa'>Empresa</Link>
            </Container>
        </nav>
    )
}

export default NavBar;
// import { Link } from "react-router-dom";