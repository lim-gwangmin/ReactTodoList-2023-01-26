import React from 'react';

function SectionTodoApp({ children }) {
   return (
      <section className='todoapp'>
         {children}
      </section>
   );
};

export default SectionTodoApp;