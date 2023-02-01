import React from 'react';

function Count({ todos }) {
   const activeTodoLength = todos.filter(todo => todo.done === false).length;
   
   return (
      <span className='todo-count'>
         <strong>{activeTodoLength}</strong> item left
      </span>
   );
};

export default Count;