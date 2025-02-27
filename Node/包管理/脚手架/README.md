# 如何开发一个脚手架

## 了解几个脚手架常用工具库

- `commander`: 解析命令行参数
- `inquirer`: 交互式询问用户
- `chalk`: 美化输出
- `ora`: 显示 loading 效果
- `fs-extra`: 文件操作

## 1. 初始化项目

```bash
npm init -y
```

### 在 命令行中 写入 命令

```js
// 1. 创建 node 脚本
#!/usr/bin/env node
console.log('脚手架...')

// 2. 添加 bin 属性
"bin": {
    "scaffold": "./index.js"
}

// 3. npm link 将脚本链接到全局
npm link

// 4. 使用
scaffold
```

### 使用工具 commander 解析命令行参数

```js
const program = require('commander')

program.option('-n, --name <name>', 'your name')
program.parse(process.argv)
```