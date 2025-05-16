import styles from '../projetos/ProjetoForm.module.css';

function ProjetoForm() {
  return (
    <form className={styles.form}>
        <div>
            <input type="text" placeholder="Insira o nome do Projeto"/>
        </div>
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