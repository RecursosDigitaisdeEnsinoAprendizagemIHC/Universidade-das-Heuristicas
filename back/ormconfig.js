require('dotenv').config()

const pwd = process.env.PWD

const isProduction = process.env.NODE_ENV === `production`

const rootDir = `${pwd}/core`;

const productionConfig = isProduction ? {
  ssl: { rejectUnauthorized: false },
} : {}

module.exports = {
  type: `postgres`,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  options: {
    trustServerCertificate: true
  },
  ...productionConfig,
  logging: false,
  entities: [`${rootDir}/database/entity/**/*{.ts,.js}`],
  migrations: [`${rootDir}/database/migration/**/*{.ts,.js}`],
  subscribers: [`${rootDir}/database/subscriber/**/*{.ts,.js}`],
  cli: {
    entitiesDir: `${rootDir}/database/entity`,
    migrationsDir: `${rootDir}/database/migration`,
    subscribersDir: `${rootDir}/database/subscriber`
  }
}


