import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import NovoProjeto from "./components/pages/NovoProjeto";
import './App.css';
import Container from "./components/layout/Container";



function App() {


  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Container>
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/empresa" element={<Empresa/>}/>
          <Route path="/contato" element={<Contato/>}/>  
          <Route path="/novoprojeto" element={<NovoProjeto/>}/>  
          </Routes>
          </Container>
      </Router>
    </div>
  );
}

export default App;
