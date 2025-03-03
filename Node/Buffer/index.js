const message = "Hello"

// 创建 Buffer 的第1种方式
const buffer1 = Buffer.from(message)

console.log(buffer1)

// 创建 Buffer 的第2种方式
const buffer2 = Buffer.alloc(10)

console.log(buffer2)

// 创建 Buffer 的第3种方式
const buffer3 = Buffer.allocUnsafe(10)

console.log(buffer3)

// 不推荐
const buffer4 = new Buffer(10)
console.log(buffer4)

const 中文 = "你好" // 存储的是 unicode 编码

const buffer5 = Buffer.from(中文, "utf-8") // 存储的是 utf-8 编码 3个字节

console.log(buffer5)

const buffer6 = Buffer.from(中文, "utf-16le") // 存储的是 utf-16le 编码 2个字节

console.log(buffer6)




