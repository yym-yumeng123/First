const http = require('http')

// 创建一个web 服务器
const server = http.createServer((req, res) => {
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)

  res.end('hello World')
})

// 监听端口
server.listen(3000, 'localhost', () => {
  console.log('服务器启动成功')
})