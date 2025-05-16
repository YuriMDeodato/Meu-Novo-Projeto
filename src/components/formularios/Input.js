import styles from './Input.module.css';    

function Input ({type, text, name, placeholder, value, handleOnChange}) {
    return(
        <div className={styles.controle_formulario}>
            <label htmlFor={name}>{text}:</label>
             <input 
              type={text} 
              name={name} 
              id={name} 
              placeholder={placeholder} 
              onChange={handleOnChange}
              value={value}
              />
        </div>
    )
}

export default Input;