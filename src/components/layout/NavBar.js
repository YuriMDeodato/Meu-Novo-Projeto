import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

function NavBar(){

    return(
        <nav className={styles.navbar}>
        <ul class={styles.list}>
            <li className={styles.item}><Link to='/'>Home</Link></li>
            <li className={styles.item}><Link to='/novoprojeto'>Projetos</Link></li>
            <li className={styles.item}><Link to='/contato'>Contato</Link></li>
            <li className={styles.item}><Link to='/empresa'>Empresa</Link></li>
        </ul>
    </nav>
    )
}

export default NavBar;
// import { Link } from "react-router-dom";