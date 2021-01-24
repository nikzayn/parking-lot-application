import { Request, Response } from 'express';
import { Controller, Get, Post } from '@overnightjs/core';
import { TodoServices } from './todos.services';
import { TodoEntity } from './todo.entity';

@Controller('api/v1/todos')
export class TodoController {
  constructor(private todoServices: TodoServices) {}
  @Get()
  public async fetch(req: Request, res: Response): Promise<Response> {
    const todos: TodoEntity[] = await this.todoServices.getAllTodos();
    return res.status(200).json({ todos, msg: 'get_called' });
  }

  @Post()
  private add(req: Request, res: Response): void {
    res.status(200).json({ msg: 'add_called' });
  }
}
