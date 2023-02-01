import React from 'react';
import EditInput from './EditInput';
import { useLocation } from 'react-router';
import routeLocation from 'utils/routeLocation';

function List({ 
   todos,
   deleteTodo, 
   todoChecked, 
   editOepn, 
   editing, 
   editClose,
 }) {
   const location = useLocation().state.route;
   const { routeFilterTodos } = routeLocation(todos, location);

   return (
      routeFilterTodos && routeFilterTodos.map(todo => (
         <EditInput 
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            todoChecked={todoChecked}
            editOepn={editOepn}
            editing={editing}
            editClose={editClose}
         />
      ))
   );
};

export default List;