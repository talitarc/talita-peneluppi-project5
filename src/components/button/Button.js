import React from 'react';
import './Button.css'

const Button = props => {
    return (
        <button className={process.className}>{props.value}</button>
    )
}

export default Button