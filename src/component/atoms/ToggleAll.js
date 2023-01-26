import React from 'react';

function ToggleAll() {
   return (
      <React.Fragment>
         <input id="toggle-all" className="toggle-all" type="checkbox"/>
         <label Htmlfor="toggle-all">Mark all as complete</label>
      </React.Fragment>
   )
};

export default ToggleAll;