import React from 'react';

let count = 0;

function useTodoController(initial) {
   const [ todos, setTodos ] = React.useState(initial);

   const createTodo = text => {
      setTodos([...todos, { id: ++count, text, done: false, edit: false }]);
   };

   const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id));
   };

   const todoChecked = id => {
      setTodos(todos.map(todo => {
         if(todo.id === id) {
            return {...todo, done: !todo.done}
         }
         return todo;
      }));
   };

   const allTodoClear = () => {
      setTodos(todos.filter(todo => todo.done === false));
   };

   const todoListAllToggle = _switch => {
      setTodos(todos.map(todo => {
         return {
            ...todo, done: _switch
         }
      }));
   };

   const editOepn = id => {
      setTodos(todos.map(todo => {
         if(todo.id === id) {
            return {...todo, edit:true}
         };

         return todo;
      }))
   };

   const editClose = (id, text) => {
      setTodos(todos.map(todo => {
         if(todo.id === id) {
            return {...todo, text, edit:false}
         }
         return todo;
      }));
   };

   const editing = (id, text) => {
      setTodos(todos.map(todo => {
         if(todo.id === id) {
            return {...todo, text}
         }
         return todo;
      }));
   };

   return {
      todos,
      createTodo,
      deleteTodo,
      todoChecked,
      allTodoClear,
      todoListAllToggle,
      editOepn,
      editClose,
      editing,
   };
};


export default useTodoController;