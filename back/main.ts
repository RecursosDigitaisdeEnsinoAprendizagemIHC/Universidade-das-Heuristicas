import { app } from './core/app';
import dotenv from 'dotenv';

const port = 8996

dotenv.config()

main()
export async function main() {
  const listener = app.listen(port, () => { });

  // @ts-ignore
  console.log(`⚡️[server]: Server is running at http://localhost:${listener.address()?.port}`);
}

