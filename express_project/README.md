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

# 初始化
npx sequelize-cli init
```

### 数据库迁移

```bash
npx sequelize-cli db:migrate
```

- config/config.json: 数据库配置
- models/index.js: 数据库模型
- migrations: 数据库迁移
- seeders: 数据库种子


### 步骤

1. 建立模型和迁移文件

```bash
npx sequelize-cli model:generate --name Article --attributes title:string,content:text
```

2. 运行迁移

```bash
npx sequelize-cli db:migrate
```

3. 建立种子 (生成大量数据)

```bash
npx sequelize-cli seed:generate --name article
```

4. 运行种子

```bash
npx sequelize-cli db:seed --seed 20250311025625-article
```





