const http = require("http")

const server = http.createServer((req, res) => {
  // http 状态码
  // 200 成功
  // 404 未找到
  // 500 服务器错误
  // 302 重定向
  // 304 未修改
  // 405 方法不允许
  // 403 禁止访问
  // 400 请求错误
  // 401 未授权
  // 408 请求超时
  // 502 网关错误
  // 503 服务不可用
  // 504 网关超时
  // res.statusCode = 200
  res.writeHead(200)

  // 设置响应头
  res.setHeader("Content-Type", "text/html;charset=utf-8")
  res.setHeader("Content-Length", 10)
  res.setHeader("Content-Disposition", "attachment;filename=test.txt")
  res.setHeader("Content-Encoding", "gzip")
  res.setHeader("Content-Language", "zh-CN")
  res.end("hello")
})

server.listen(3000, "localhost", () => {
  console.log("服务器启动成功")
})
