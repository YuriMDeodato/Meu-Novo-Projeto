
function Saudacao({nome}) {

    function gerarsaudacao(algumNome){
        return `Olá ${algumNome}, tudo bem?`
    }
  return (
    <div>
  {nome && <p>{gerarsaudacao(nome)}</p>}
    </div>
  );
}

export default Saudacao;