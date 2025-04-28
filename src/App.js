import List from './components/List';
import './App.css';
import Evento from './components/Evento';

function App() {

  const nome = 'GEOBABY'
  return (
    <div className="App">
    <h1>Testando eventos</h1>
    <List/>
    <Evento numero="1"/>
    <Evento numero="2"/>
    </div>
  );
}

export default App;
