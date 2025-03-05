const http = require("http")
const fs = require("fs")
const qs = require("querystring")

const server = http.createServer((req, res) => {
  console.log(req.headers)
  if (req.url === "/upload") {
    if (req.method === "POST") {
      // 设置请求体编码为二进制
      req.setEncoding("binary")
      let body = ""
      const totalBoundary = req.headers["content-type"].split(";")[1]
      const boundary = totalBoundary.split("=")[1]

      req.on("data", (chunk) => {
        body += chunk
      })
      req.on("end", () => {
        // 处理请求体, 获取文件信息, 得到图片数据
        // 这里会包含请求头和请求体, 需要解析, file 信息数据不需写入文件
        const payload = qs.parse(body, "\r\n", ": ")
        const type = payload["Content-Type"]

        // image/png 截取
        const typeIndex = body.indexOf(type)
        const typeLength = type.length
        let imageData = body.substring(typeIndex + typeLength)

        // 去掉空格
        imageData = imageData.replace(/^\s\s*/, "")

        // 将最后的 boundary 去掉
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))
        console.log(imageData)
        fs.writeFileSync("./foo.png", imageData, { encoding: "binary" }, (err) => {
          if (err) {
            console.log(err)
          }
        })
        res.end("文件上传成功")
      })
    }
  }
})

server.listen(3000, "localhost", () => {
  console.log("服务器启动成功")
})
