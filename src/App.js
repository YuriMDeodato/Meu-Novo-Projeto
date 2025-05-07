import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import './App.css';
import NavBar from "./components/NavBar";


function App() {


  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route path="/empresa" element={<Empresa/>}/>
          <Route path="/contato" element={<Contato/>}/>  
          </Routes>
      </Router>
    </div>
  );
}

export default App;
