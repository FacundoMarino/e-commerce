import React from 'react';

const Button = ({ color, click, text }) => {
    return (
        <>
            <button className={color} onClick={click} >
                 {text} 
            </button>
        </>
    );
}

export default Button;
