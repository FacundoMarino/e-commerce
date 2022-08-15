import React from 'react';

const Button = ({ color, click, text }) => {
    return (
        <div>
            <button style={{backgroundColor: color}} onClick={click} >
                 {text} 
            </button>
        </div>
    );
}

export default Button;
