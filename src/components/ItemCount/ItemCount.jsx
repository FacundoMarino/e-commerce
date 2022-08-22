import React, {useState} from 'react';
import Button from '../Button/Button';
import './ItemCount.css'

const ItemCount = ({ click, stock }) => {

    const [count, setCount] = useState(1)

   const countHandler = (incrementar)=>{

        (incrementar) ? setCount(count + 1) : setCount(count - 1)}


  
   
    return (

        <div className='container-item'>

            <Button disabled={count <= 1} color='rest' click={() => countHandler(false)} text='-' />
            <p className='count'> {count} </p>
            <Button disabled={(count >= stock)} color='sum' click={() => countHandler(true)} text='+' />
            <Button click={() => click(count)}  color='add' text='Agregar al Carrito' />

        </div>
    );
}


export default ItemCount;
 