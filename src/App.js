import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
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
          </Routes>
      </Router>
    </div>
  );
}

export default App;
