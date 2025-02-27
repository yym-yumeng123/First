### 包管理工具 npm (node package manager)

npm 是 Node.js 的包管理工具, 用于管理 Node.js 的包。

npm 的包管理工具是基于 node 的, 所以需要先安装 node 才能使用 npm。

比如 express koa react vue 都是基于 npm 的包。

包存放在 registry 中, 默认是 https://registry.npmjs.org/

#### 项目配置文件

- 记录显示名称, 版本, 描述, 入口文件, 依赖等信息
- 包的配置文件: package.json

```bash
npm init # 初始化项目
npm init -y # 快速初始化项目

npm install # 安装依赖

npm run xxx # 运行脚本
```

```json
{
  "name": "my-package", // 包的名称
  "version": "1.0.0", // 包的版本
  "description": "my package", // 包的描述
  "main": "index.js", // 包的入口文件 作为工具使用时, 默认会执行这个文件
  // 脚本 可以自定义命令
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    // 生产依赖 用于生产环境
    "express": "^4.18.2"
  },
  "devDependencies": {
    // 开发依赖 用于开发环境
    "nodemon": "^3.1.7"
  },
  "keywords": ["package", "npm"], // 包的关键词
  "author": "your name", // 包的作者
  "license": "ISC", // 包的许可证
  "private": true, // 是否私有 作用是防止包被安装到全局
  "engines": {
    "node": ">=12.0.0", // 指定 node 的版本
    "npm": ">=6.0.0" // 指定 npm 的版本
  },
  "browserlist": [
    "last 1 version", // 指定浏览器列表
    "> 1%", // 指定浏览器市场份额
    "not ie <= 8" // 指定浏览器版本
  ]
}
```

#### 版本管理

- 语义化版本管理
- 版本号: 主版本.次版本.修订版本 例如: 1.0.0
- 主版本: 重大更新 例如: 1.0.0 -> 2.0.0
- 次版本: 次要更新 例如: 1.0.0 -> 1.1.0
- 修订版本: 修复 bug 例如: 1.0.0 -> 1.0.1

- 版本范围:

  - ^: 主版本不变, 次版本和修订版本可以更新 例如: ^1.0.0 -> 1.1.0
  - ~: 主版本和次版本不变, 修订版本可以更新 例如: ~1.0.0 -> 1.0.1
  - _: 任何版本 例如: _ -> 1.1.0

- 安装指定版本

```bash
npm install express@4.18.2
```

- 安装指定范围的版本

```bash
npm install express@^4.18.2
```
