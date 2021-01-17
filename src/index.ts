import app from './app';

const port: number = Number(process.env.PORT) || 8080

app.listen(port, () => {
  console.info(`Server started at http://localhost:${port}`);
});

