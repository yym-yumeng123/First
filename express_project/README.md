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
npx sequelize model:generate --name Category --attributes name:string,rank:integer
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





### 企业级项目开发流程

1. 编写需求文档
2. 原型与UI设计
3. 确定数据库的表, 字段,以及接口地址和数据
4. 同时进行: 前端 mock 数据, 后端接口开发
5. 前后端联调
6. 测试 部署



### 规划数据库

1. 分类表 Categoies
   1. id 主键
   2. name 分类名称
   3. sort 排序
   4. createdAt 创建时间
   5. updatedAt 更新时间
2. 课程表 Courses
   1. id 主键: interger, not null, auto increment
   2. categoryId 分类id 关联分类表: interger, not null, index
   3. userId 用户id 关联用户表: interger, not null, index
   4. name 课程名称: varchar(255), not null
   5. image 封面: varchar(255)
   6. recommend 推荐: boolean, not null, default false
   7. introductory 是否入门课程: boolean, not null, default false
   8. content 课程内容: text
   9. likesCount 点赞数: interger, not null, default 0
   10. chaptersCount 章节数: interger, not null, default 0
3. 章节表 Chapters
   1. id 主键: interger, not null, auto increment
   2. courseId 课程id 关联课程表: interger, not null, index
   3. title 章节名称: varchar(255), not null
   4. content 章节内容: text
   5. video 视频地址: varchar(255)
   6. rank 章节排序: interger, not null, default 0
4. 用户表 Users
   1. id 主键: interger, not null, auto increment
   2. username 用户名: varchar(255), not null, unique
   3. email 邮箱: varchar(255), not null, unique
   4. password 密码: varchar(255), not null
   5. nickname 昵称: varchar(255), not null
   6. avatar 头像: varchar(255)
   7. sex 性别: tinyint, not null, default 0
   8. company 公司: varchar(255)
   9. introduce 个人介绍: text
   10. role 角色: tinyint, not null, default 0
5. 点赞表 Likes
   1. id 主键: interger, not null, auto increment
   2. userId 用户id 关联用户表: interger, not null, index
   3. courseId 课程id 关联课程表: interger, not null, index
   4. createdAt 创建时间: datetime, not null
   5. updatedAt 更新时间: datetime, not null


### MySQL Workbench 

workbench 是 MySQL 的图形化管理工具, 可以方便的创建数据库, 表, 视图, 存储过程等.
