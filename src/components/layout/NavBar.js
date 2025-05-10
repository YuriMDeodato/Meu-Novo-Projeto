import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import Container from "../layout/Container";
function NavBar(){

    return(
        
        <nav className={styles.navbar}>
            <Container className={styles.container}>
            <Link to='/'></Link>
            <ul className={styles.list}>
            <li class={styles.item}><Link to='/'>Home</Link></li>
            <li class={styles.item}><Link to='/contato'>Contato</Link></li>
            <li class={styles.item}><Link to='/empresa'>Empresa</Link></li>
            </ul>
            </Container>
        </nav>
    ) 
}

export default NavBar;
// import { Link } from "react-router-dom";