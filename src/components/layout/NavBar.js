import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import Container from "../layout/Container";
import gif from "../../images/gifgif.gif";
function NavBar(){

    return(
        
        <nav className={styles.navbar}>
            <Container className={styles.container}>
            <Link class={styles.gif} to='/'><img src={gif} alt="logo"/></Link>
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