import { useEffect, useState } from 'react';
import styles from '../projetos/ProjetoForm.module.css';
import Input from '../formularios/Input';
import Select from '../formularios/Select';
import BotaoSubmit from '../formularios/BotaoSubmit';

function ProjetoForm({btnText}) {
  const [categorias, setCategorias] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/categorias', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((resposta) => resposta.json())
    .then((data)=> { 
      setCategorias(data)
   })
    .catch((error) => console.log (error));
  }, []);
  
  return (
    <form className={styles.form}>
        
            <Input 
             type="text"
             text="NOME DO PROJETO"
             name="name"
             placeholder="Insira o nome do Projeto"
             />
            <Input 
             type="number"
             text="ORÇAMENTO DO PROJETO"
             name="valor total"
             placeholder="Insira o valor total do projeto"
             />
            <Select 
              name="category_id" 
              text="Selecione a categoria"
              options={categorias}
              />
            <Input 
             type="text"
             text="DESCRIÇÃO DO PROJETO"
             name="description"
             placeholder="Insira a descrição do projeto"
             />
             <BotaoSubmit text={btnText}/>
    </form>
  );
}

export default ProjetoForm; 