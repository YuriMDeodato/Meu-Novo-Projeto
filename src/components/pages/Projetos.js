import Mensagens from "../layout/Mensagens";
import { useLocation } from "react-router-dom";

function Projetos() {

  const location = useLocation();
  let msg = '';
  if (location.state) {
    msg = location.state.msg;
  }

  return (
    <div>
      <h1>Projetos</h1>
      <p>Esta é a página de projetos.</p>
      {msg && <Mensagens type="sucesso" msg={msg} />}
    
    </div>
  );
}

export default Projetos;