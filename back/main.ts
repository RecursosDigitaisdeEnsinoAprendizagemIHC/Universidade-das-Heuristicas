import { app } from './core/app';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';

const port = 8996

dotenv.config()

createConnection().then(() => main())

export async function main() {
  const { appRouter } = await import('./core/router')
  app.use('/', appRouter)
  const listener = app.listen(port, () => { });

  // @ts-ignore
  console.log(`⚡️[server]: Server is running at http://localhost:${listener.address()?.port}`);
}

