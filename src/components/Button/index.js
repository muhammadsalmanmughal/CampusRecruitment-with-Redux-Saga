import React from 'react'

const Button = ({value,onClick, style}) => {
    return(
        <button
        value={value}
        onClick={onClick}
        style={style}
        >
            {value}
            </button>
    )
}
export default Button