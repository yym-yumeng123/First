### 常用内置模块

- fs
- path
- http
- https
- os

#### path

path 模块提供了用于处理和转换文件路径的实用工具。它可以帮助你构建、解析和操作文件路径。

在不同的操作系统中, 路径的表示方式是不同的, 例如:

- Windows: `C:\Users\v_yymyyang\Desktop\yym_github\First\Node\Demo2\test.txt`
- Linux: `/Users/v_yymyyang/Desktop/yym_github/First/Node/Demo2/test.txt`

所以需要使用 path 模块来处理路径, 保证在不同操作系统中都能正常工作。

#### path 模块的常用方法

- `path.resolve([...paths])`: 将多个路径拼接成一个完整的路径
- `path.join([...paths])`: 将多个路径拼接成一个完整的路径
- `path.basename(path)`: 返回路径的最后一部分
- `path.dirname(path)`: 返回路径的目录名
- `path.extname(path)`: 返回路径的扩展名


#### 文件系统模块

fs (file system) 模块是 Node.js 提供的用于操作文件的模块, 它提供了一系列的 API, 用于读取和写入文件。

文件系统模块提供了用于读取和写入文件的实用工具。它可以帮助你创建、读取、写入和删除文件。可以在任何操作系统中使用。

#### 文件系统模块的常用方法

- `fs.readFile(path, [options], callback)`: 读取文件
- `fs.writeFile(path, data, [options], callback)`: 写入文件
- `fs.appendFile(path, data, [options], callback)`: 追加文件
- `fs.unlink(path, callback)`: 删除文件
- `fs.rename(oldPath, newPath, callback)`: 重命名文件
- `fs.stat(path, callback)`: 获取文件状态


大部分的 API 都是异步的, 需要传入回调函数来处理结果。, 大多数会提供三种方式来使用:

- 同步操作文件, 会阻塞代码的执行, 直到操作完成。
- 异步操作文件, 不会阻塞代码的执行, 会在操作完成后调用回调函数。
- 流式操作文件, 会以流的方式操作文件, 适合大文件的操作。


#### 文件描述符

文件描述符是一个用于标识文件的抽象概念, 它是一个非负整数, 用于唯一标识文件。跟踪文件的读写操作。


#### 文件读写

flag 参数用于指定文件操作的类型, 有以下几种:

- `r`: 读取文件
- `w`: 打开文件写入
- `a`: 追加文件
- `r+`: 读取并写入文件
- `w+`: 写入并读取文件

encoding 参数用于指定文件的编码方式, 有以下几种:

- `utf-8`: 默认编码方式
- `utf-16`: 16 位编码方式
- `utf-32`: 32 位编码方式
- `ascii`: ASCII 编码方式
- `base64`: Base64 编码方式


#### 文件夹操作

- `fs.mkdir(path, [options], callback)`: 创建文件夹
- `fs.rmdir(path, callback)`: 删除文件夹
- `fs.readdir(path, callback)`: 读取文件夹
- `fs.stat(path, callback)`: 获取文件状态


