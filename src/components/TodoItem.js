import React from 'react';
import Button from './Button';
import { render } from '@testing-library/react';

const TodoItem = (props) => {
  console.log(props);
  
  return (
   <div className='text2'> 
      <ul className='liTeg'>
        <span>{props.value}</span>
     </ul>
      {/* <Button onClick={props.deletTodos}  value="Done"/> */}
      <Button onClick={() => props.deleteTodos(props.id)} value="Delete"/> 
  </div>       
  )
}

  


export default TodoItem;