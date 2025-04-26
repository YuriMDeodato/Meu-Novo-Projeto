import Item from './Item'

function List(){

    return(
        <>
        <h1>Minha Lista</h1>
            <ul>
               <Item marca="Volvo" lancamento="1980"/>
               
               <Item marca="Volvo" lancamento="2000"/>
            </ul>
        </>
    )
}

export default List