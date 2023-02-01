import React from 'react';
import { Count, ClearCompleted } from 'component/atoms/index'; 


function FilterFooter({ children }) {
   return (
      <footer className='footer'>
         {children}
      </footer>
   );
};

FilterFooter.Count = Count;
FilterFooter.ClearCompleted = ClearCompleted;

export default FilterFooter;