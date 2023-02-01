import React from 'react';

const ENTER = 'Enter';

function NewTodoInput({ createTodo }) {
   const [ text, setText ] = React.useState('');

   const handleChange = e => {
      setText(e.target.value);
   };

   const handleKeyPress = e => {
      if(e.key !== ENTER || text === '') return;
      createTodo(text);
      setText('');
   };

   return (
      <input 
         className="new-todo" 
         placeholder="What needs to be done?"
         value={text}
         onChange={handleChange}
         onKeyPress={handleKeyPress}
      />
   );
};

export default NewTodoInput;