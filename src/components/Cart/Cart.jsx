import React from 'react';
import { useDataContext } from '../../context/DataProvider/DataProvider';
import ProductInCart from '../ProductInCart/ProductInCart';

const Cart = () => {

const { cart, totalPrice } = useDataContext()

    return (
        <>

        
            {

    (cart.length === 0) ? <h1 >No tenés productos en tu carrito</h1> :    

            cart.map(element =>             
                <ProductInCart className='container-cards' key={element.id} data={element} />)  
                
            }
                
        <>

            <p className='description-card'>Precio Total: {totalPrice()}</p>

        </>  
        </>
    );
}

export default Cart;
