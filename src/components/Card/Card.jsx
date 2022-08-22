import React from 'react';
import './Card.css'

const Card = ({ data }) => {
    return (
        <div className='card'>
            <h1 className='title'> {data.title} </h1>
            <img className='card-img' src={data.img} alt={data.title} />            
            <p className={(data.onsale) ? 'offer' : 'noOffer'}>Precio ${data.price}</p>
        </div>
    );
}

export default Card;
