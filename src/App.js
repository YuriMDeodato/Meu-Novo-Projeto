import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import './App.css';

const itens = [ "Item 1", "Item 2", "Item 3", "Item 4", "Item 5" ];
function App() {


  return (
    <div className="App">
      <OutraLista item = {itens}/>
      <OutraLista item = {[]}/>
    </div>
  );
}

export default App;
