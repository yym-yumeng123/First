const mysql = require("mysql")
const config = require("./config")


// 创建 MySQL 连接池
const pool = mysql.createPool(config.db)

// 测试数据库连接
pool.getConnection((err, connection) => {
  if (err) {
    console.error("数据库连接失败:", err)
    return
  }
  console.log("数据库连接成功")
})

module.exports = pool
