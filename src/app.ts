import { Server } from '@overnightjs/core';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

/** import modules here */
import TodoModule from './modules/todos';
import { sequelize } from './databases/mysql';

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

  public start(port: number): void {
    this.app.listen(port, async () => {
      await sequelize.authenticate();
      console.log('Server listening on port: ' + port);
    });
  }
}
