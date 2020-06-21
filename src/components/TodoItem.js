import React from 'react';
import Button from './Button';
import { render } from '@testing-library/react';

const TodoItem = (props) => {
  return (
   <div className='text2'> 
      <ul className='liTeg'>
        <span>{props.value}</span>
     </ul>
      <Button onClick={props.doneTodos}  value="Done"/>
      <Button onClick={props.deletTodos} value="Delete"/> 
  </div>       
  )
}

  


export default TodoItem;