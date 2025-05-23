import styles from './Mensagens.module.css';
import { useState, useEffect } from 'react';

function Mensagens({ type, msg }) {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (msg) {
      setFadeOut(false);   // Reset fade out
      setVisible(true);    // Ativa visibilidade (com fade-in)

      const timer = setTimeout(() => {
        setFadeOut(true);  // Inicia fade-out
        setTimeout(() => {
          setVisible(false); // Esconde de vez após animação
        }, 500);
      }, 5000); // tempo da mensagem visível

      return () => clearTimeout(timer);
    }
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`
          ${styles.mensagens}
          ${styles[type]}
          ${styles.show}
          ${fadeOut ? styles.fadeOut : ''}
        `}>
          {msg}
        </div>
      )}
    </>
  );
}

export default Mensagens;
