class UserService {
  async create(user) {
    console.log(user)
    // user 存储到数据库
    return "注册成功"
  }
}

module.exports = new UserService()
