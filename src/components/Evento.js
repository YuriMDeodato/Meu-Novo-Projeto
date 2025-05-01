
import Button from "./evento/Button";
function Evento({numero}){

    function meuEvento(){
        console.log(`Fui ativado ${numero}`);
    }

    function segundoEvento(){
        console.log("Ativando segundo evento")
    }

    return(
        <div>
            <Button text="primeiro evento"/>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
            <button onClick={segundoEvento}>Ativar segundo evento!</button>
        </div>
    )
}

export default Evento