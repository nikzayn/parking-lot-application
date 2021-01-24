import { getRepository } from 'typeorm';
import { TodoEntity } from './todo.entity';

export class TodoServices {
  public async getAllTodos(): Promise<TodoEntity[]> {
    try {
      const todoRepository = await getRepository(TodoEntity);
      return todoRepository.find();
    } catch (error) {
      console.error(error);
    }
  }
}