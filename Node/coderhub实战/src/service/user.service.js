const pool = require("../app/database")

class UserService {

  async create(user) {
    const { username, password } = user
    // const createUser = `
    //   CREATE TABLE IF NOT EXISTS users (
    //     id INT AUTO_INCREMENT PRIMARY KEY,
    //     username VARCHAR(255) NOT NULL UNIQUE,
    //     password VARCHAR(255) NOT NULL,
    //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    //     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    //   )
    // `
    const insertUser = `
      INSERT INTO users (username, password) VALUES (?, ?)
    `
    // 执行创建表的sql语句
    // await pool.execute(createUser)
    // user 存储到数据库
    try {
      const [results, fields] = await pool.execute(insertUser, [username, password])
      console.log(results, fields, 'service')
      return results
    } catch (error) {
      console.error('创建用户错误:', error)
      throw error
    }
  }
  
  async getUserByName(username) {
    console.log(username, 'service_get....')
    const statement = `SELECT * FROM users WHERE username = ?;`
    console.log(statement, 'service_get....')
    try {
      const result = await pool.execute(statement, [username])
      console.log(result, 'service_get....result...')
      // 确保result是数组再解构
      const users = Array.isArray(result) ? result[0] : result
      // 确保users是数组
      return Array.isArray(users) && users.length > 0 ? users[0] : null
    } catch (error) {
      console.error('获取用户错误:', error)
      throw error
    }
  }
}

module.exports = new UserService()
