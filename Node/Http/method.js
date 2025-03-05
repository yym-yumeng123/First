const http = require("http")
const url = require("url")

const server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url, true)
  const { pathname } = urlObj

  if (pathname === "/login") {
    console.log(req.method)
    if (req.method === "POST") {
      // 获取请求体
      let body = ""
      req.on("data", (chunk) => {
        body += chunk
      })
      req.on("end", () => {
        console.log(body, typeof body) // string
        // 解析请求体
        const { username, password } = JSON.parse(body)
        console.log(username, password)
      })
    } else {
      // 405 方法不允许
      res.statusCode = 405
      // 返回 json 格式
      res.end(JSON.stringify({
          message: "405 方法不允许",
        })
      )
    }
  } else if (pathname === "/register") {
    res.end("注册")
  }
})

server.listen(3000, "localhost", () => {
  console.log("服务器启动成功")
})
