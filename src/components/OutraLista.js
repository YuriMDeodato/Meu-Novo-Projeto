
function OutraLista({item}){

    return(
        <>
        <h1>Lista de Coisas</h1>
        {item.length ===0 && <p>Não há itens nessa lista!</p>}
        {item.map((itens, index) => <p key={index}>{itens}</p>)}
        </>
    )
}

export default OutraLista;