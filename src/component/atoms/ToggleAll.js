import React from 'react';

function ToggleAll({ todos, todoListAllToggle }) {
   const [ allToggle, setAllToggle ] = React.useState(false);
   const allTodoCheck = todos.find(todo => todo.done === false) ? true : false;

   React.useEffect(() => {
      allTodoCheckFilter(!allTodoCheck);
   }, [allTodoCheck]);

   const allTodoCheckFilter = _switch => {
      setAllToggle(_switch);
   };
   
   const hanldechangeAllToggle = () => {
      if(allTodoCheck) {
         allTodoCheckFilter(true);
         todoListAllToggle(true);
      } else {
         allTodoCheckFilter(false);
         todoListAllToggle(false);
      }
   };

   return (
      <React.Fragment>
         <input 
            id="toggle-all" 
            className="toggle-all" 
            type="checkbox"
            checked={allToggle}
            onChange={hanldechangeAllToggle}
         />
         <label htmlFor="toggle-all">Mark all as complete</label>
      </React.Fragment>
   )
};

export default ToggleAll;