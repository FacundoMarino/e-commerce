import React from 'react';
import { useDataContext } from '../../context/DataProvider/DataProvider';
import Button from '../Button/Button'
import './ProductInCart.css'



const ProductInCart = ({ data }) => {

    const { deleteProduct } = useDataContext()  

    const deleteHandler = () =>{
        deleteProduct(data.id)
    }


    return (
        <>
        <div className='card'>
            
            <Button color='button-delete'  text='Delete' click={deleteHandler} />
            <h1 className='title'> {data.title} </h1>
            <img className='card-img' src={data.img} alt={data.title} />
            <p className='description-card'>${data.price}</p>
            <p className='description-card'>Cantidad: {data.quantity}</p>
            
        </div>


        
        </>
    );
}

export default ProductInCart;
