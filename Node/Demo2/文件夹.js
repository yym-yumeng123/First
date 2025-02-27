const fs = require("fs")
const path = require("path")

const dirPath = "./test"

// 创建文件夹
// 判断文件夹是否存在, 如果存在则不创建, 否则创建
if (!fs.existsSync(dirPath)) {
  fs.mkdir(dirPath, (err) => {
    if (err) {
      console.log("创建文件夹失败", err)
    }
  })
}

// 读取文件夹的所有内容
fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.log("读取文件夹失败", err)
  }
  console.log("读取文件夹成功", files)
})

function getFiles(dirPath) {
  fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
    for (const file of files) {
      if (file.isDirectory()) {
        const filePath = path.resolve(dirPath, file.name)
        getFiles(filePath)
      } else {
        console.log(file.name)
      }
    }
    if (err) {
      console.log("读取文件夹失败", err)
    }
  })
}

getFiles(dirPath)
