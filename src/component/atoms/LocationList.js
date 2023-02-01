import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE } from 'constants/constants';

const SELECTED = 'selected';

function LocationList() {
   return (
      <React.Fragment>
         <li>
            <NavLink
               to={ROUTE.ALL}
               className={({ isActive }) => isActive ? SELECTED : undefined }
               state={{ route: ROUTE.ALL }}
            >
               All
            </NavLink>
         </li>
         <li>
            <NavLink
               to={ROUTE.ACTIVE}
               className={({ isActive }) => isActive ? SELECTED : undefined }
               state={{ route: ROUTE.ACTIVE }}
            >
               Active
            </NavLink>
         </li>
         <li>
            <NavLink
               to={ROUTE.COMPLETED}
               className={({ isActive }) => isActive ? SELECTED : undefined }
               state={{ route: ROUTE.COMPLETED }}
            >
               Completed
            </NavLink>
         </li>
      </React.Fragment>
   );
};

export default LocationList;