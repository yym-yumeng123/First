const app = require("./app")
const config = require("./app/config")
const pool = require("./app/database")

app.use(async (ctx, next) => {
  ctx.body = "Hello World"
})

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})
