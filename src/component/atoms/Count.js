import React from 'react';

function Count({ count }) {
   return (
      <span class='todo-count'>
         <strong>{count}</strong> item left
      </span>
   );
};

export default Count;