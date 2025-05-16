import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import Projetos from "./components/pages/Projetos";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import NovoProjeto from "./components/pages/NovoProjeto";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import './App.css';




function App() {


  return (
      <Router>
        <NavBar/>
        <Container customClass="min-height">
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/projetos" element={<Projetos/>} />
          <Route path="/empresa" element={<Empresa/>}/>
          <Route path="/contato" element={<Contato/>}/>  
          <Route path="/novoprojeto" element={<NovoProjeto/>}/>  
          </Routes>
          </Container>
        <Footer/> 
      </Router>
  );
}

export default App;
