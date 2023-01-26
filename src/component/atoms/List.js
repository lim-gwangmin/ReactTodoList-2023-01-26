import React from 'react';

function List() {
   return (
      <li className='completed'>
         <div className="view">
            <input className="toggle" type="checkbox" checked='checked'/>
            <label>테스트 텍스트 1</label>
            <button className="destroy"/>
         </div>
         <input className="edit" value="Create a TodoMVC template" />
      </li>
   );
};

export default List;