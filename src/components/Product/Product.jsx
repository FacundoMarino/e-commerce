import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const Product = ({ data }) => {


    return (
        <div>
            <h1 className='title'> {data.title} </h1>
            <img className='card-img' src={data.img} alt={data.title} />
            <p className='description-card'>{data.detail}</p>
            <p>Stock: {data.stock} </p>
            <ItemCount />                        
        </div>
    );
}

export default Product;
