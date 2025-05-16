

import styles from './Select.module.css';    

function Select ({ text, name, options, value, handleOnChange}) {
    return(
        <div className={styles.controle_formulario}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    )
}

export default Select;