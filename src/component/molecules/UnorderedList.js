import React from 'react';

function UnorderedList({ children, id, className }) {
   return (
      <ul id={id && id} className={className && className}>
         {children}
      </ul>
   );
};

export default UnorderedList;