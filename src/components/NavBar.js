
import { Link } from "react-router-dom";

function NavBar(){

    return(
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          </ul>
    )
}

export default NavBar;