module.exports = {
  // 数据库配置
  db: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456",
    database: "yym_t",
    waitForConnections: true,
    connectionLimit: 10, // 连接池最大连接数
    queueLimit: 0,
  },
  // 服务器配置
  server: {
    port: 3000,
  },
}
