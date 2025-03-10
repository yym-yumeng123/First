const mysql = require("mysql2")

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "yym_t",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

const sql = `
  SELECT * FROM users where id = ?
`

pool
  .promise()
  .execute(sql, [1])
  .then(([rows, fields]) => {
    console.log(rows)
  })
  .catch((err) => {
    console.log(err)
  })
