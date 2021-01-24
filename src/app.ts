import { Server } from '@overnightjs/core';
import * as express from 'express';
import * as logger from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';

/** import modules here */
import database from './databases/mysql';
import TodoModule from './modules/todos';

export class AppServer extends Server {
  constructor() {
    super();

    this.app.use(
      logger('dev', {
        skip: () => this.app.get('env') === 'test'
      })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());

    /** define controllers */
    super.addControllers([TodoModule]);
  }

  public async start(port: number): Promise<void> {
    try {
      const connection = await database;

      this.app.listen(port, async () => {
        console.info(`Server running at http://localhost:${port}`);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
