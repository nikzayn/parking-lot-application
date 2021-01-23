import {Sequelize} from 'sequelize';
import { SEQUELIZE_OPTIONS } from './config';

export const sequelize = new Sequelize(String(process.env.CONNECTION_URL), 
{
  pool: SEQUELIZE_OPTIONS.pool,
  logging: SEQUELIZE_OPTIONS.logging,
  benchmark: SEQUELIZE_OPTIONS.benchmark,
});

