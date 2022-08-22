import React from 'react';
import { useDataContext } from '../../context/DataProvider/DataProvider';
import ItemCount from '../ItemCount/ItemCount'
import  Swal from 'sweetalert2'
import './Product.css'

const Product = ({ data }) => {

    const { addCart } = useDataContext()

    const add = (quantity) => {
        addCart(data, quantity)
        data.stock -= quantity
        Swal.fire(
             '¡Agregaste el producto al carrito!',
             '',
             'success'
          )
    }


    return (
        <div className='product'>
            <div className='product-detail'>
            <h1 className='title'> {data.title} </h1>
            <img className='card-img' src={data.img} alt={data.title} />
            <p className='description-card'>{data.detail}</p>
            </div>
            <div>
            <p className='stock'>Stock: {data.stock} </p>
            <ItemCount stock={Number(data.stock)} click={add} />                        
            </div>
        </div>
    );
}

export default Product;
