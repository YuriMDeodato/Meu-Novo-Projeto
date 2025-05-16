import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import Container from "../layout/Container";
import gif from "../../images/gifgif.gif";

function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <Link to='/'><img src={gif} alt="logo" className={styles.logo} /></Link>
                <Container className={styles.container}>
                    <ul className={styles.list}>
                        <li className={styles.item}><Link to='/'>Home</Link></li>
                        <li className={styles.item}><Link to='/projetos'>Projetos</Link></li>
                        <li className={styles.item}><Link to='/contato'>Contato</Link></li>
                        <li className={styles.item}><Link to='/empresa'>Empresa</Link></li>
                    </ul>
                </Container>
            </nav>
            <div className={styles.separator}></div>
        </>
    );
}

export default NavBar;
// import { Link } from "react-router-dom";