const koa = require("koa")
const app = new koa()

app.use(async (ctx, next) => {
  ctx.body = "Hello World"
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
