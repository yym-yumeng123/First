const dotenv = require("dotenv")

dotenv.config()

const { APP_PORT } = process.env

module.exports = {
  port: APP_PORT
}