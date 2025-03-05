const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  console.log(req.headers)
  if (req.url === "/upload") {
    if (req.method === "POST") {
      // 错误示范
      const fileWriter = fs.createWriteStream("./foo.png", {
        flags: "a+",
      })
      req.on("data", (chunk) => {
        console.log(chunk)
        // 错误, 文件上传失败
        fileWriter.write(chunk)
      })
      req.on("end", () => {
        console.log("文件上传成功")
        res.end("文件上传成功")
      })
    }
  }
})

server.listen(3000, "localhost", () => {
  console.log("服务器启动成功")
})
