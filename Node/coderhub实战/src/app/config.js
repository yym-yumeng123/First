const dotenv = require("dotenv")

dotenv.config()

const { APP_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

module.exports = {
  port: APP_PORT,
  db: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  },
}