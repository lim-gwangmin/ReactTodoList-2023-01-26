import { ROUTE } from "constants/constants";

function routeLocation(todos = [], route) {
   let routeFilterTodos = todos;

   switch(route) {
      case ROUTE.ACTIVE:
         routeFilterTodos = todos.filter(todo => todo.done === false);
         break;
      case ROUTE.COMPLETED:
         routeFilterTodos = todos.filter(todo => todo.done === true);
         break;
      default:
         routeFilterTodos = todos;
   };

   return { routeFilterTodos }
};

export default routeLocation;