import React from 'react';



const ProductInCart = ({ data }) => {


    return (
        <>
        <div className='card'>

            <h1 className='title'> {data.title} </h1>
            <img className='card-img' src={data.img} alt={data.title} />
            <p className='description-card'>${data.price}</p>
            <p className='description-card'>Cantidad: {data.quantity}</p>
            
        </div>

        </>
    );
}

export default ProductInCart;
