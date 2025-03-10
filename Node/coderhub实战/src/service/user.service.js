const pool = require("../app/database")

class UserService {
  async create(user) {
    console.log(user)
    const createUser = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `
    const insertUser = `
      INSERT INTO users (username, password) VALUES (?, ?)
    `
    // 执行创建表的sql语句
    // await pool.execute(createUser)
    // user 存储到数据库
    const result = await pool.execute(insertUser, [user.username, user.password])
    return result
  }
}

module.exports = new UserService()
