
import './App.css';

function App() {

  const name = "Yuri"

  const newName = name.toUpperCase()


  return (
    <div className="App">
     <h1>Olá React</h1>
     <h2>{name}</h2>
    </div>
  );
}

export default App;
