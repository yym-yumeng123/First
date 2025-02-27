const fs = require("fs")

const filePath = "./abc.txt"

// 打开文件
const fd = fs.open(filePath, (err, fd) => {
  if (err) {
    console.log("打开文件失败", err)
    return
  }
  console.log("打开文件成功", fd)
  // 通过描述符获取文件信息
  fs.fstat(fd, (err, stats) => {
    if (err) {
      console.log("获取文件信息失败", err)
      return
    }
    console.log("获取文件信息成功", stats)
  })
})

