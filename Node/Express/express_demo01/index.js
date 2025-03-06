const express = require('express');
const mysql = require('mysql2');

// 创建 Express 应用
const app = express();

// 创建 MySQL 连接池
const pool = mysql.createPool({
  host: 'localhost',      // 数据库主机地址
  user: 'root',           // 数据库用户名
  password: '123456',   // 数据库密码
  database: 'yym_t', // 数据库名称
  waitForConnections: true,
  connectionLimit: 10,    // 连接池最大连接数
  queueLimit: 0,
  authPlugins: {
    mysql_native_password: () => require('mysql2/lib/auth/mysql_native_password'),
  },
});

// 测试数据库连接
pool.getConnection((err, connection) => {
  if (err) {
    console.error('数据库连接失败：', err);
    return;
  }
  console.log('数据库连接成功！');
  connection.release(); // 释放连接
});

// 定义路由：查询数据
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  pool.query(sql, (err, results) => {
    if (err) {
      console.error('查询失败：', err);
      return res.status(500).json({ error: '查询失败' });
    }
    res.json(results);
  });
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
