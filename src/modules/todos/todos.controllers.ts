import { Request, Response } from 'express';
import { Controller, Get, Post } from '@overnightjs/core';
import { TodoService } from './todos.services';

@Controller('api/v1/todos')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  private fetch(req: Request, res: Response): any {
    const todos = this.todoService.getAll();
    return res.status(200).json({ data: todos, msg: 'get_called' });
  }

  @Post()
  private add(req: Request, res: Response): void {
    res.status(200).json({ msg: 'add_called' });
  }
}
