import React from 'react';
import Button from './Button';

const TodoItem = (props) => {
  return (
   <div className='text2'> 
      <ul className='liTeg'>
        <span>{props.value}</span>
     </ul>
      <Button value="Done"/>
      <Button  value="Delete"/> 
  </div>       
  )
}

export default TodoItem;