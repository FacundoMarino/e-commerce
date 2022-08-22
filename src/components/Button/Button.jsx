import React from 'react';
import './Button.css'

const Button = ({ color, click, text, disabled }) => {
    return (
        <>
            <button disabled={disabled} className={color} onClick={click} >
                 {text} 
            </button>
        </>
    );
}

export default Button;
