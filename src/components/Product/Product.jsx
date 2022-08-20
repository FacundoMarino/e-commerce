import React from 'react';
import { useDataContext } from '../../context/DataProvider/DataProvider';
import ItemCount from '../ItemCount/ItemCount'

const Product = ({ data }) => {

    const { addCart } = useDataContext()

    const add = (quantity) => {
        addCart(data, quantity)
        data.stock -= quantity
    }


    return (
        <div>
            <h1 className='title'> {data.title} </h1>
            <img className='card-img' src={data.img} alt={data.title} />
            <p className='description-card'>{data.detail}</p>
            <p>Stock: {data.stock} </p>
            <ItemCount click={add} />                        
        </div>
    );
}

export default Product;
