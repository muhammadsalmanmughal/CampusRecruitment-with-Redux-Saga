import React from 'react'

const TextInput = ({type, name, value, onChange, styles, ...props}) => {

    return(
        <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
        ></input>
    )
}

export default TextInput