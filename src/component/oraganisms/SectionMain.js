import React from 'react';
import { ToggleAll } from 'component/atoms/index';
import { TodoList } from 'component/molecules/index';

function SectionMain({ children }) {
   return (
      <section className='main'>
         { children }
      </section>
   );
};

SectionMain.ToggleAll = ToggleAll;
SectionMain.TodoList = TodoList;

export default SectionMain;
