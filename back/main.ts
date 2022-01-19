import { app } from './core/app';
import dotenv from 'dotenv';


dotenv.config()

main()
export async function main() {
  const listener = app.listen(() => { });

  // @ts-ignore
  console.log(`⚡️[server]: Server is running at https://localhost:${listener.address()?.port}`);
}