import "reflect-metadata";
import { createConnection, Connection } from "typeorm";

// export class Database {
//   static dbConnection: Connection;

//   static async getDbConnection() {
//     if (Database.dbConnection)
//       return Database.dbConnection

//     Database.dbConnection = await createConnection()
//     return Database.dbConnection
//   }
// }
// (async function () {
//   await Database.getDbConnection()
// })()

// export const getDbConnection = Database.getDbConnection