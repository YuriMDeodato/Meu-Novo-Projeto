import styles from '../projetos/ProjetoForm.module.css';
import Input from '../formularios/Input';
import Select from '../formularios/Select';
import BotaoSubmit from '../formularios/BotaoSubmit';

function ProjetoForm({btnText}) {
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
            <Select name="category_id" text="Selecione a categoria"/>
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