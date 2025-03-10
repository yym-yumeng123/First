const mysql = require("mysql2")

// 创建连接池
const pool = mysql.createConnection({
  host: "localhost", // 数据库地址
  user: "root", // 数据库用户名
  password: "123456", // 数据库密码
  database: "yym_t", // 数据库名
})

const sql = `
  SELECT * FROM users where id = ?
`

// 执行查询
// pool.query(sql, [1], (err, rows, fields) => {
//   if (err) throw err
//   console.log(rows)
// })


// 创建一个预编译语句
pool.execute(sql, [1], (err, rows, fields) => {
  if (err) throw err
  console.log(rows)
})
