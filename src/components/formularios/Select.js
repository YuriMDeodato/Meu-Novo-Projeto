

import styles from './Select.module.css';    

function Select ({ text, name, options, value, handleOnChange}) {
    return(
        <div className={styles.controle_formulario}>
            <label htmlFor={name}>{text}</label>
           <select name={name} id={name} value={value} onChange={handleOnChange}>
    <option>Selecione uma opção</option>
    {Array.isArray(options) && options.map((option) => (
        <option key={option.id} value={option.id}>
            {option.name}
        </option>
    ))}
</select>
        </div>
    )
}

export default Select;