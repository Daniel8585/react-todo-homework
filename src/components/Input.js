import React from 'react';

const Input = (props) => {
  return (
    <input id='inputId' type="text" onChange={props.handleChange} />
  )
}



export default Input;