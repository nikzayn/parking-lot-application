import 'reflect-metadata';
import 'dotenv/config';
import { AppServer } from './app';

/** load the env */
// dotenv.config();

/** initiate the app here */
const { PORT } = process.env;
const app = new AppServer();
app.start(Number(PORT));
