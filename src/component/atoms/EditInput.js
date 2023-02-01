import React from 'react';
import { CLASS_NAME } from 'constants/constants';
import useOnClickOutLine from 'hooks/useOnClickOutLine';

function EditInput({ 
   todo,
   deleteTodo, 
   todoChecked, 
   editOepn, 
   editing, 
   editClose,
 }) {
   const editLabelRef = React.useRef(null);

   useOnClickOutLine(editLabelRef, () => {
      editClose(todo.id, todo.text);
   });

   React.useEffect(() => {
      if(editLabelRef.current !== null) {
         editLabelRef.current.focus();
      };
   }, [todo.edit])
   
   return (
      <li className={todo.edit === true ? CLASS_NAME.EDITING : (todo.done === true ? CLASS_NAME.COMPLETED : '')}>
         <div className="view">
            <input 
               className="toggle" 
               type="checkbox" 
               checked={todo.done} 
               onChange={() => todoChecked(todo.id)}
            />
            <label 
               onDoubleClick={() => editOepn(todo.id)}>
               {todo.text}
            </label>
            <button className="destroy" onClick={() => deleteTodo(todo.id)}/>
         </div>
         <input 
            ref={editLabelRef}
            className="edit" 
            value={todo.text} 
            onChange={(e) => editing(todo.id, e.target.value)}
         />
      </li>
   );
};

export default EditInput;