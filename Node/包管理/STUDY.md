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

npm run xxx # 运行脚本

# 全局安装 一般用于安装工具
npm install -g xxx # 全局安装
npm uninstall -g xxx # 全局卸载

# 本地安装
npm install xxx # 本地安装
npm uninstall xxx # 本地卸载

# 开发依赖 一般用于安装工具
npm install -D xxx # 开发依赖
npm uninstall -D xxx # 开发依赖卸载

# 清除缓存
npm cache clean -f # 清除缓存

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

### npm install 原理

1. package.json 中记录了依赖信息
2. 根据 package.json 中的依赖信息, 下载对应的包
3. 下载的包会存放在 node_modules 目录下
4. 如果 package.json 中记录了依赖信息, 则不会下载
5. 生成 package-lock.json 文件, 记录了包的版本信息

### package-lock.json 文件

```json
    "axios": {
      "version": "1.8.1", // 包的版本
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.8.1.tgz", // 包的下载地址
      "integrity": "sha512-NN+fvwH/kV01dYUQ3PTOZns4LWtWhOFCAhQ/pHb88WQ1hNe5V/dvFwc4VJcDL11LT9xSX0QtsR8sWUuyOuOq7g==", // 包的 integrity 值
      "requires": {
        "follow-redirects": "^1.15.6",
        "form-data": "^4.0.0",
        "proxy-from-env": "^1.1.0"
      }
    }
```

### Yarn

- 是 Facebook 开发的包管理工具
- 与 npm 兼容
- 解决了 npm 的很多问题
- 安装速度比 npm 快
- 安装更稳定

### npx 工具

- 调用项目中某个模块的指令

```bash
npx create-react-app my-app
```
