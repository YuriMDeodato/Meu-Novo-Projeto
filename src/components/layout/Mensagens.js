import styles from './Mensagens.module.css';

function Mensagens({ type, msg }) {
  return (
    <div className={`${styles.mensagens} ${styles[type]}`}>{msg}</div>
  );
}

export default Mensagens;