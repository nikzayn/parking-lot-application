import { Request, Response } from 'express';
import { Controller, Get, Post } from '@overnightjs/core';

@Controller('api/v1/todos')
export class TodoController {
  @Get()
  private fetch(req: Request, res: Response): any {
    return res.status(200).json({msg: 'get_called' });
  }

  @Post()
  private add(req: Request, res: Response): void {
    res.status(200).json({ msg: 'add_called' });
  }
}
