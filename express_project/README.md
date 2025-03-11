# Express Project

### 目录解析

- bin: 存放启动脚本
- public: 存放静态文件
- routes: 存放路由文件
- app.js: 存放应用配置

### 项目启动

```bash
npm start # nodemon
```

### MySQL

```bash
npm install mysql2
```

```sql
# 插入
INSERT INTO users (name, email, password) VALUES ('John', 'john@example.com', 'password123');

# 更新
UPDATE users SET email = 'john@example.com' WHERE id = 1;

# 删除
DELETE FROM users WHERE id = 1;

# 查询
SELECT * FROM users ORDER BY id DESC;
```

### 数据库连接

```js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'project01',
});
```

### Sequelize

```bash
npm install sequelize sequelize-cli
```


