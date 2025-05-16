import styles from '../projetos/ProjetoForm.module.css';
import Input from '../formularios/Input';

function ProjetoForm() {
  return (
    <form className={styles.form}>
        
            <Input 
             type="text"
             text="Nome do projeto"
             name="name"
             placeholder="Insira o nome do Projeto"
             />
        
        <div>
            <input type="number" placeholder="Insira o orçamento total"/>
        </div>
        <div>
        <select>
            <option disabled selected >Selecione a categoria</option>
        </select>
        </div>
        <div>
            <input type="submit" value="Criar projeto"/>
        </div>
    </form>
  );
}

export default ProjetoForm; 