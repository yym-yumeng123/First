const fs = require("fs")

const filePath = "./abc.txt"

// 写入文件
fs.writeFile(filePath, "你好, yym", { flag: "a", encoding: "utf-8" }, (err) => {
  if (err) {
    console.log("写入文件失败", err)
    return
  }
  console.log("写入文件成功")
})

// 文件读取, 不传入 encoding 参数, 返回的是 buffer 对象
fs.readFile(filePath, { flag: "r", encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("读取文件失败", err)
    return
  }
  console.log("读取文件成功", data)
})
