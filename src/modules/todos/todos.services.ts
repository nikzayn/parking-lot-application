import { Todo } from './todos.constants';

export class TodoService {
  constructor(private storage: any) {}

  getAll(): Todo[] {
    return this.storage;
  }

  create(todo: Todo): Todo {
    this.storage.push(todo);
    return todo;
  }

  remove(name: string): boolean {
    this.storage = this.storage.filter((t: any) => t.name !== name);
    return true;
  }
}
