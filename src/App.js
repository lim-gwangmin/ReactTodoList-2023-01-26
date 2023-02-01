import './themes/index.css';
import { SectionTodoApp } from 'component/templetes/index';
import { Header, UnorderedList } from 'component/molecules/index';
import { SectionMain, FilterFooter } from 'component/oraganisms/index';
import { List, LocationList } from 'component/atoms/index';
import useTodoController from 'hooks/useTodoController';
import { CLASS_NAME } from 'constants/constants';

function App() {
   const {
      todos,
      createTodo,
      deleteTodo,
      todoChecked,
      allTodoClear,
      todoListAllToggle,
      editOepn,
      editClose,
      editing,
   } = useTodoController([]);

   return (
      <SectionTodoApp>
         <Header>
            <Header.NewTodoInput createTodo={createTodo}/>
         </Header>
         <SectionMain>
            <SectionMain.ToggleAll todos={todos} todoListAllToggle={todoListAllToggle}/>
            <UnorderedList className={CLASS_NAME.TODO_LIST}>
               <List 
                  todos={todos} 
                  deleteTodo={deleteTodo} 
                  todoChecked={todoChecked}
                  editOepn={editOepn}
                  editing={editing}
                  editClose={editClose}
               />
            </UnorderedList>
         </SectionMain>
         <FilterFooter>
            <FilterFooter.Count todos={todos}/>
            <UnorderedList className={CLASS_NAME.FILTERS}>
               <LocationList/>
            </UnorderedList>
            <FilterFooter.ClearCompleted allTodoClear={allTodoClear}/>
         </FilterFooter>
      </SectionTodoApp>
   );
}

export default App;
