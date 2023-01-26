import React from 'react';
import { NavLink } from 'react-router-dom';

function LocationList() {
   return (
      <React.Fragment>
         <li>
            <NavLink>All</NavLink>
         </li>
         <li>
            <NavLink>Active</NavLink>
         </li>
         <li>
            <NavLink>Completed</NavLink>
         </li>
      </React.Fragment>
   );
};

export default LocationList;