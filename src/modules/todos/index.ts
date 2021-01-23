import { TodoController } from './todos.controllers';
import { TodoService } from './todos.services';

export default new TodoController(new TodoService([]));
