import React from 'react';

function ClearCompleted({ allTodoClear }) {
   return (
      <button 
         className="clear-completed"
         onClick={allTodoClear}
      >
         Clear completed
      </button>
   );
};

export default ClearCompleted;