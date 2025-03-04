const fs = require('fs')

// 读取文本文件
fs.readFile('./foo.txt', (err, data) => {
  console.log(data)
  console.log(data.toString())
})

// 读取图片
fs.readFile('./bar.png', (err, data) => {
  console.log(data) // n 个字节
  fs.writeFile('./foo.png', data, (err) => {
    console.log('err', err)
  })
})