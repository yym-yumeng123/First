const http = require("http")
const url = require("url")
const server = http.createServer((req, res) => {
  // if (req.url === "/login") {
  //   res.end("登录")
  // } else if (req.url === "/register") {
  //   res.end("注册")
  // } else {
  //   res.end("404")
  // }


  if (req.url === "/login") {
    const urlObj = url.parse(req.url, true)
    const { username, password } = urlObj.query
    console.log(username, password)
    res.end("登录成功")
  } else if (req.url === "/register") {
    res.end("注册")
  } else {
    res.end("404")
  }

})

server.listen(3000, "localhost", () => {
  console.log("服务器启动成功")
})
