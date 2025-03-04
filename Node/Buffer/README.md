### 数据的二进制

计算机只能识别二进制数据, 所以需要将数据转换为二进制数据: 文字 数字 图片 视频 音频 等


对于服务器来说

- 服务器处理的本地类型文件较多
- 保存文本的文件不是使用 utf-8 编码, 而是用 GBK
- 如果需要读取图片数据(二进制), 在通过某些收到对图片进行二次处理, Node 有一个 Sharp 库, 传入图片 的 Buffer 
- 在 node 通过 tcp 建立长连接, tcp 传输的是字节流

### Buffer 和 二进制

- 在 Node 中, 使用 Buffer 来处理二进制数据
- 可以将 Buffer 看作是一个存储二进制数据的数组
- 这个数组中的每一项, 可以保存 8 位二进制数据: 00000000
- 1byte = 8bit, 1kb = 1024byte, 1mb = 1024kb


### Buffer 和 字符串

```js
// 创建一个 Buffer 对象
const buf = Buffer.from("hello")
console.log(buf)

// 创建一个 Buffer 对象
const buf2 = Buffer.from("你好")
console.log(buf2)

// 将 Buffer 转换为字符串
console.log(buf2.toString('utf-8'))
console.log(buf2.toString('utf-16le'))
```

### Buffer 的其它创建

```js
// 创建一个 Buffer 对象
// alloc 创建一个指定大小的 Buffer 对象, 10 个字节 10个 00
const buf3 = Buffer.alloc(10)
console.log(buf3)

// 修改 buffer 中的内容
buf3[0] = 255
buf3[1] = 0x88
console.log(buf3)

// allocUnsafe 创建一个指定大小的 Buffer 对象, 10 个字节
const buf4 = Buffer.allocUnsafe(10)
console.log(buf4)

// 修改 buffer 中的内容
buf4[0] = 255
console.log(buf4)
```

### Buffer 和 文件操作