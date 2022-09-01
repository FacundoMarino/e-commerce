import  Swal from 'sweetalert2'
import './Product.css'
import { useDataContext } from '../../context/DataProvider/DataProvider';
import ItemCount from '../ItemCount/ItemCount'
import React from 'react';

const Product = ({ data }) => {

    const { addCart } = useDataContext()

    const add = (quantity) => {
        addCart(data, quantity)      
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
                <ItemCount stock={Number(data.stock)} click={add} />                        
            </div>
        </div>
    );
}

export default Product;
