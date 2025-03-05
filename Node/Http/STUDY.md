### Http 模块


#### Web服务器

当应用程序(客户端)需要一个资源时, 可以向一台服务器, 通过 Http 请求获取这个资源, 提供资源的这个服务器, 就是一个 Web 服务器

- 目前有很多开源的 Web 服务器: Nginx Apache(静态) Apache Tomcat(静态 动态) Node.js


### Node 监听主机和端口号

`Server` 通过 `listen` 方法开启服务器, 并且在某一个主机和端口上监听网络请求
  - 也就是当我们通过 `ip:port` 发送到我们监听的 Web 服务器时, 我们可以对其进行相关处理

listen函数 有三个参数
  - 端口 port, 可以不传, 系统会默认分配端,
  - 主机 host: 通常可以传 `localhost`  ip地址 `127.0.0.1` `0.0.0.0`
    - `localhost` 本质是一个域名, 通常解析为 127.0.0.1
    - `127.0.0.1`: 回环地址, 表达的意思是我们主机自己发出去的包, 直接被自己接受
    - `0.0.0.0`: 监听 IPV4 上所有的地址, 再根据端口找到不同的应用程序
    - 我们监听 `0.0.0.0` 时, 在同一个网段下的主机, 通过ip地址是可以访问的
  - 回调函数, 服务器启动成功的回调函数

#### request 对象

封装了客户端给服务端的所有信息

- req.url: 请求url
- req.method: 请求方式
- req.headers: 请求头信息

```js
const url = require('url')
if(req.url === '/login') {
  res.end('登录')
} else if(req.url === '/register') {
  res.end('注册')
} else {
  res.end('404')
}

// 获取请求参数
const urlObj = url.parse(req.url, true)
const query = urlObj.query
```


