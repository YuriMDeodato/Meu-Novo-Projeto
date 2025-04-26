import List from './components/List';
import './App.css';
import Evento from './components/Evento';

function App() {

  const nome = 'GEOBABY'
  return (
    <div className="App">
    <h1>Testando eventos</h1>
    <List/>
    <Evento/>
    </div>
  );
}

export default App;
