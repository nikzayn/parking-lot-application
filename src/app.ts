import express, { Application, Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

app.disable('x-powered-by');
app.use(logger('dev', {
	skip: () => app.get('env') === 'test'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

// Routes
app.use('/', (req: Request, res: Response) => {
  res.status(200).json({ message : "Welcome to Hydrogen."});
});

// Error handler
app.use((err: Error, req: Request, res: Response) => {
	res
		.status(500)
		.json({
			message: err.message
		});
});

export default app;