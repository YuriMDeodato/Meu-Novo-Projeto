import styles from '../projetos/ProjetoForm.module.css';
import Input from '../formularios/Input';
import Select from '../formularios/Select';

function ProjetoForm() {
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
        <div>
            <input type="submit" value="Criar projeto"/>
        </div>
    </form>
  );
}

export default ProjetoForm; 