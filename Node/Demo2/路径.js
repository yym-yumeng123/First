const path = require('path')

const basePath = '/Users/v_yymyyang/Desktop/yym_github/First/Node/Demo2'
const filename = 'test.txt'

const filePath = path.resolve(basePath, filename)

console.log(filePath)

// 获取路径的信息
const filePath1 = '/Users/yym/abc.txt'

console.log(path.dirname(filePath1)) // 获取路径的目录名
console.log(path.basename(filePath1)) // 获取路径的文件名
console.log(path.extname(filePath1)) // 获取路径的扩展名

// join 路径拼接
// join 不会判断参数是否是绝对路径, 只会将参数拼接成一个完整的路径
const filePath2 = path.join(basePath, filePath1)
console.log('join', filePath2)

// resolve 路径拼接
// resolve 会判断参数是否是绝对路径, 如果是绝对路径, 则返回绝对路径,
// 否则会将参数拼接成一个完整的路径
const filePath3 = path.resolve(basePath, filePath1)
console.log('resolve', filePath3)

// 规范化路径
// 规范化路径会将路径中的多个斜杠合并成一个斜杠, 并且会将路径中的 . 和 .. 进行处理
const filePath4 = path.normalize(filePath1)
console.log('normalize', filePath4)



