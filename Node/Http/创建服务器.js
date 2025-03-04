const http = require('http')

// 创建方式2
const server = new http.Server((req, res) => {
  res.end('Server2')
})

server.listen(3001, 'localhost', () => {
  console.log('启动成功')
})