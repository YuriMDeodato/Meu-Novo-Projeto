import List from './components/List';
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ["Vue", "React", "Angular"]  
  return (
    <div className="App">
    <h1>Renderização de listas</h1>
    <OutraLista itens={meusItens}/>
    <OutraLista itens={meusItens}/>
    <Condicional/>
    
    </div>
  );
}

export default App;
