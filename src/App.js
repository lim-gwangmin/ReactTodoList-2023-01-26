import './themes/index.css';
import { SectionTodoApp } from 'component/templetes/index';
import { Header } from 'component/molecules/index';
import { SectionMain, FilterFooter } from 'component/oraganisms/index';

function App() {
   return (
      <SectionTodoApp>
         <Header>
            <Header.NewTodoInput/>
         </Header>
         <SectionMain>
            <SectionMain.ToggleAll/>
            <SectionMain.TodoList>
               <SectionMain.TodoList.List/>
            </SectionMain.TodoList>
         </SectionMain>
         <FilterFooter>
            <FilterFooter.Count/>
            <FilterFooter.Filters>
               <FilterFooter.Filters.LocationList/>
            </FilterFooter.Filters>
            <FilterFooter.ClearCompleted/>
         </FilterFooter>
      </SectionTodoApp>
   );
}

export default App;
