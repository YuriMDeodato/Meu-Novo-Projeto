import Mensagens from "../layout/Mensagens";
import { useLocation } from "react-router-dom";
import styles from "./Projetos.module.css";
import Container from "../layout/Container";
import LinkBotao from "../layout/LinkBotao";

function Projetos() {

  const location = useLocation();
  let msg = '';
  if (location.state) {
    msg = location.state.msg;
  }

  return (
    <div className={styles.projeto_container}>
      <div className={styles.titulo_container}>
        <h1>Meus Projetos</h1>
        <LinkBotao to="/novoprojeto" text="Criar Projeto" />
      </div>
      {msg && <Mensagens type="sucesso" msg={msg} />}
      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    
    </div>
  );
}

export default Projetos;