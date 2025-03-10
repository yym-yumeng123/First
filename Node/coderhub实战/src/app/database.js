const mysql = require("mysql2")
const { db } = require("../app/config")

const pool = mysql.createPool({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

// 测试数据库连接
pool.getConnection((err, connection) => {
  connection.connect((err) => {
    if (err) {
      console.log("数据库连接失败", err)
    } else {
      console.log("数据库连接成功")
    }
  })
})

module.exports = pool
