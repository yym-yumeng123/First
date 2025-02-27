const fs = require("fs")

const filePath = "./abc.txt"

// 读取文件信息

// 同步读取文件
const data = fs.readFileSync(filePath, "utf-8")
console.log("同步读取文件", data)
console.log(data)

// 异步读取文件
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log("读取文件失败", err)
    return
  }
  console.log("异步读取文件", data)
})

// promise 读取文件
fs.promises
  .readFile(filePath, "utf-8")
  .then((data) => {
    console.log("promise 读取文件", data)
  })
  .catch((err) => {
    console.log("读取文件失败", err)
  })
