//  发送请求

const http = require("http")

// 发送get请求
http.get("http://localhost:3000/login", (res) => {
  console.log(res.statusCode)
  console.log(res.headers)
  res.on("data", (chunk) => {
    console.log(chunk.toString())
  })
})

// 发送post请求
const req = http.request({
  method: "POST",
  hostname: "localhost",
  port: 3000,
  path: "/login",
}, (res) => {
  console.log(res.statusCode)
  console.log(res.headers)
  res.on("data", (chunk) => {
    console.log(chunk.toString())
  })
})

req.end("hello")
