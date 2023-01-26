import React from 'react';
import { Filters } from 'component/molecules/index';
import { Count, ClearCompleted } from 'component/atoms/index'; 


function FilterFooter({ children }) {
   return (
      <footer className='footer'>
         {children}
      </footer>
   );
};

FilterFooter.Count = Count;
FilterFooter.Filters = Filters;
FilterFooter.ClearCompleted = ClearCompleted;

export default FilterFooter;