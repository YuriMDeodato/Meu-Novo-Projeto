
function OutraLista({itens}){

    return(
        <>
        <h3>Lista de Coisas:</h3>
        {itens.length === 0 && <p>Não há itens na lista</p>}
        {itens.map ((item, index) => <p key={index}>{item}</p>)}
        </>
    )
}
export default OutraLista;