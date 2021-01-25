import { TodoController } from './todos.controllers';
import { TodoServices } from './todos.services';

export default new TodoController(new TodoServices());
