import React from 'react';
import { List } from 'component/atoms/index';

function TodoList({ children }) {
   return (
      <ul className='todo-list'>
         {children}
      </ul>
   );
};

TodoList.List = List;

export default TodoList;