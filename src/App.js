import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css';



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
