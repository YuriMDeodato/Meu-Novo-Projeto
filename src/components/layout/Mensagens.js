import styles from './Mensagens.module.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  AlertCircle,
  Info,
  XCircle,
  X
} from 'lucide-react';

const icones = {
  sucesso: <CheckCircle size={20} />,
  erro: <XCircle size={20} />,
  info: <Info size={20} />,
  alerta: <AlertCircle size={20} />
};

function Mensagens({ type = 'info', msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (msg) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [msg]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className={`${styles.mensagens} ${styles[type]}`}
        >
          <span className={styles.icone}>{icones[type]}</span>
          <span className={styles.texto}>{msg}</span>
          <button
            onClick={() => setVisible(false)}
            className={styles.fechar}
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Mensagens;
