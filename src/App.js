import List from './components/List';
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const nome = 'GEOBABY'
  return (
    <div className="App">
    <h1>Testando eventos</h1>
    <List/>
    <Form/>
    </div>
  );
}

export default App;
