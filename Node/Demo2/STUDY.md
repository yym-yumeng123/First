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
