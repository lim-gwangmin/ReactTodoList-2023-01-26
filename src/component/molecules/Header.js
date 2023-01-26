import React from 'react';
import { NewTodoInput } from 'component/atoms/index';


function Header({ children }) {
   return (
      <header className='header'>
         <h1>todos</h1>
         {children}
      </header>
   );
};

Header.NewTodoInput = NewTodoInput;

export default Header;