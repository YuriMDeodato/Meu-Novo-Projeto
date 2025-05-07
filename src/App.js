import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import './App.css';

function App() {


  return (
    <div className="App">
      <Router>
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
          <Routes>
          <Route  path="/home" element={<Home/>} />
          <Route path="/empresa" element={<Empresa/>}/>
          <Route patth="/contato" element={<Contato/>}/>  
          </Routes>
      </Router>
    </div>
  );
}

export default App;
