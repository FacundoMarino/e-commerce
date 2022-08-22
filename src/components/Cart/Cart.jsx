import React from 'react';
import { useDataContext } from '../../context/DataProvider/DataProvider';
import ProductInCart from '../ProductInCart/ProductInCart';
import { Link } from 'react-router-dom';


const Cart = () => {

const { cart, totalPrice } = useDataContext()


if(cart.length === 0){
    
    return(
    
    <h1 >No tenés productos en tu carrito</h1>
)}

    return (
        <>
        
        {cart.map(element => <ProductInCart className='container-cards' key={element.id} data={element} />)}

        <p className='description-card'>Precio Total: {totalPrice()}</p>
        <h2><Link to='/form' >Finalizar Compra</Link></h2>
        
        </>
    )
  
}

export default Cart;
