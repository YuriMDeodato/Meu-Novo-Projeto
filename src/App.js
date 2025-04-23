
import './App.css';

function App() {

  const name = "Yuri"

  const newName = name.toUpperCase()

  function sum( a, b){
    return (a+b)
  }


  return (
    <div className="App">
     <h1>Olá React</h1>
     <h2>{name}</h2>
     <p>Soma: {sum(1,2)}</p>
    </div>
  );
}

export default App;
