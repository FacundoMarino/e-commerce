import React, {useState} from 'react';
import Button from '../Button/Button';

const ItemCount = () => {

    const [count, setCount] = useState(1)

   
    return (
        <div className='item-count'>
            <Button color='red' click={() =>setCount( count + 1 )} text='+' />
            <p> {count} </p>
            <Button color='green' click={() =>setCount( count - 1 )} text='-' />
            <Button color='blue' text='Agregar al Carrito' />

        </div>
    );
}

export default ItemCount;
