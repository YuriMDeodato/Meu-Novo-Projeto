import { Link } from "react-router-dom";

function NavBar(){

    return(
        <ul>
            <Link to="/">Home</Link>
            <Link to="/empresa">Empresa</Link>
            <Link to="/contato">Contato</Link>      
            <Link to="/novoprojeto">Novo Projeto</Link>
        </ul>
    )
}

export default NavBar;
// import { Link } from "react-router-dom";