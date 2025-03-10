const mysql = require('mysql2');

// 创建连接池
const pool = mysql.createPool({
  host: 'localhost', // 数据库地址
  user: 'root', // 数据库用户名
  password: '123456', // 数据库密码
  database: 'yym_t', // 数据库名
  waitForConnections: true, // 是否等待连接
  connectionLimit: 10, // 连接池最大连接数
  queueLimit: 0 // 队列最大连接数
});

const sql = `
  SELECT * FROM users where id = ?
`;

// 执行查询
pool.query(sql, [1], (err, rows, fields) => {
  if (err) throw err;
  console.log(rows);
});
