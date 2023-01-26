import React from 'react';
import { LocationList } from 'component/atoms/index';

function Filters({ children }) {
   return (
      <ul class='filters'>
         {children}
      </ul>
   );
};

Filters.LocationList = LocationList;

export default Filters;