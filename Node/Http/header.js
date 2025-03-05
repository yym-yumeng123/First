const http = require("http")

const server = http.createServer((req, res) => {
  // {
  //   'content-type': 'application/json',  请求携带的数据类型是一个json 类型
  //   'user-agent': 'PostmanRuntime/7.43.0',
  //   accept: '*/*',
  //   'postman-token': '28c9ffba-8b73-4b1d-9304-c0a75dea6eba',
  //   host: 'localhost:3000',
  //   'accept-encoding': 'gzip, deflate, br', 告知服务器客户端支持的压缩方式
  //   connection: 'keep-alive',  连接方式
  //   'content-length': '55'  数据的长度
  // }
  console.log(req.headers)
  res.end("hello")
})

server.listen(3000, "localhost", () => {
  console.log("服务器启动成功")
})
