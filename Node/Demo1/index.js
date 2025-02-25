console.log("Hello World")

// 获取传递的参数
console.log(process.argv)

process.argv.forEach((item) => {
  console.log(item)
})

console.log(__filename, '文件名')
console.log(__dirname, '文件目录')

setTimeout(() => {
  console.log('setTimeout')
}, 1000)

setInterval(() => {
  console.log('setInterval')
}, 1000)

// 立即执行
setImmediate(() => {
  console.log('setImmediate')
})

// 微任务
process.nextTick(() => {
  console.log('process.nextTick')
})

console.log(global)
