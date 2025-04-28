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
    <Evento numero="1"/>
    <Evento numero="2"/>
    <Form/>
    </div>
  );
}

export default App;
