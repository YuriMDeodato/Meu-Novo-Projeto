import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

function NavBar(){

    return(
    <nav className={styles.navbar}>
        <ul class name={styles.list}> 
            <Link to="/">Home</Link>
            <Link to="/empresa">Empresa</Link>
            <Link to="/contato">Contato</Link>      
            <Link to="/novoprojeto">Novo Projeto</Link>
        </ul>
    </nav>
    )
}

export default NavBar;
// import { Link } from "react-router-dom";