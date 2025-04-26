import PropTypes from 'prop-types'

function Item({marca, lancamento}){

return(
    <>
    <li>
    {marca} - {lancamento}
    
    </li>
    </>
 )
}

Item.propTypes = {
    marca: PropTypes.string,
    lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'zero',
    lancamento: 'nada',
}

export default Item