
import styles from './Footer.module.css';
import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
function Footer(){

    return(
        <footer className={styles.footer}>
            <ul>
            <p>SeuProjetinho &copy; 2025</p>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
            <li><FaWhatsapp /></li>
            </ul>
        </footer>
    )
}

export default Footer;