import React, {useState} from 'react';
import Button from '../Button/Button';

const ItemCount = ({ click }) => {

    const [count, setCount] = useState(1)

   const countHandler = (incrementar)=>{

        (incrementar) ? setCount(count + 1) : setCount(count - 1)}
        
   
    return (
        <div className='item-count'>

            <Button color='red' click={() => countHandler(true)} text='+' />
            <p> {count} </p>
            <Button color='green' click={() => countHandler(false)} text='-' />
            <Button click={() => click(count)}  color='blue' text='Agregar al Carrito' />

        </div>
    );
}

export default ItemCount;
