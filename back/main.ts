import { app } from './core/app';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
dotenv.config()

const ormconfig = require('./ormconfig')


const port = process.env.PORT || 8996

const connection = createConnection(ormconfig)
connection.then(express).catch((error) => {
  const dbData = {
    rootDir: process.env.NODE_ENV,
    ...ormconfig
  }
  app.get('*', (req, res) => res.json({ Status: 'Fail', error, dbData }))
  const listener = app.listen(port, () => { });

  // @ts-ignore
  console.log(`⚡️[server]: Server is running at http://localhost:${listener.address()?.port}`);
})

export default connection

async function express() {
  const { appRouter } = await import('./core/router')
  app.use('/', appRouter)
  const listener = app.listen(port, () => { });

  // @ts-ignore
  console.log(`⚡️[server]: Server is running at http://localhost:${listener.address()?.port}`);
}

