### 为什么需要数据库

软件系统需要管理大量的数据, 数据需要存储在安全可靠的地方, 并且需要方便的进行增删改查操作。

文件系统存储缺点:

- 不能以合适的方式组织数据
- 不能进行复杂的数据查询
- 数据冗余, 浪费存储空间
- 很难数据共享

### 什么是数据库

数据库是按照数据结构来组织, 存储和管理数据的仓库。

分为: 关系型数据库和非关系型数据库

关系型数据库:

- 关系型数据库是基于关系模型来组织数据的数据库
- 关系模型是指数据之间存在的一种联系
- 关系型数据库的典型代表: MySQL, Oracle, SQL Server, PostgreSQL
- 关系型数据库我们会创建很多二维表, 每个二维表都有一个唯一的表名, 二维表的每一行称为一条记录, 每一列称为一个字段, 字段名唯一标识一条记录。
- 数据表之间存在关系, 通过外键来关联, 形成一对一, 一对多, 多对多等关系。

非关系型数据库: NoSQL (Not Only SQL)

- 非关系型数据库是基于键值对来组织数据的数据库
- 键值对是指数据之间存在的一种联系
- 非关系型数据库的典型代表: MongoDB, Redis, Memcached
- NoSQL 基于 key-value 键值对存储, 不需要经过 SQL 解析, 性能非常高。

### 什么是 MySQL

- MySQL 是一个关系型数据库管理系统, 由瑞典 MySQL AB 公司开发, 属于 Oracle 旗下产品。
- MySQL 是最流行的关系型数据库管理系统之一, 在 WEB 应用方面, MySQL 是最好的 RDBMS(Relational Database Management System, 关系型数据库管理系统)应用软件之一。

### MySQL

```bash
mysql -u root -p

show databases; # 查看所有数据库
# information_schema 信息数据库, 包含 数据库, 表, 列, 权限, 用户 等元数据
# mysql 用于存储管理者的用户信息, 权限信息, 日志信息等
# performance_schema 性能数据库, 资源消耗相关的信息
# sys 相当于简易版的 performance_schema

# 创建数据库
create database mydb;

# 查看数据库
show databases;

# 当前数据库
select database();

# 使用数据库
use mydb;

# 查看当前数据库中的所有表
show tables;

# 创建表
create table mytable (
    id int primary key,
    name varchar(20) not null
);

# 查询数据
select * from mytable;

# 添加数据
insert into mytable (id, name) values (1, '张三');


# 更新数据
update mytable set name = '李四' where id = 1;
```

### GUI 工具

- 可视化工具: Navicat, DBeaver, DataGrip, SQLyog, HeidiSQL, Sequel Pro

### 认识 SQL 语句

和数据库沟通的语言, 这个语言就是 SQL (Structured Query Language, 结构化查询语言);

SQL 语句常用规范:

- 关键字大写 CREATE
- 表名和列名小写
- 使用缩进和换行提高可读性

SQL 语句分类:

- DDL (Data Definition Language, 数据定义语言)
  - 对数据库, 表, 列, 索引等进行创建, 修改, 删除等操作
  - 关键字: CREATE, ALTER, DROP, TRUNCATE
- DML (Data Manipulation Language, 数据操作语言)
  - 对数据进行增删改查操作
  - 关键字: INSERT, DELETE, UPDATE, SELECT
- DQL (Data Query Language, 数据查询语言)
  - 对数据进行查询操作
  - 关键字: SELECT
- DCL (Data Control Language, 数据控制语言)
  - 对数据进行控制操作
  - 关键字: GRANT, REVOKE

### 数据库操作

```sql
# 创建数据库
CREATE DATABASE mydb;

# 查看所有数据库
SHOW DATABASES;

# 选择某一个数据库
USE mydb;

# 查看当前在使用的数据库
SELECT DATABASE();

# 创建数据库
CREATE DATABASE mydb;

# 如果数据库不存在, 则创建数据库
CREATE DATABASE IF NOT EXISTS mydb;

# 删除数据库
DROP DATABASE mydb;

# 如果数据库存在, 则删除数据库
DROP DATABASE IF EXISTS mydb;

# 修改数据库编码
ALTER DATABASE mydb CHARACTER SET utf8mb4;

# 查看数据库编码
SHOW VARIABLES LIKE 'character_set_database';
```

### 表操作

```sql
# 查看所有表
SHOW TABLES;

# 查看表结构
DESCRIBE mytable;
DESC mytable; # 缩写

# 查看表的创建语句
SHOW CREATE TABLE mytable;

# 创建表
CREATE TABLE IF NOT EXISTS mytable (
    id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

# 删除表
DROP TABLE mytable;

# 如果表存在, 则删除表
DROP TABLE IF EXISTS mytable;

# 修改表名字
ALTER TABLE mytable RENAME TO mytable2;

# 添加字段
ALTER TABLE mytable ADD COLUMN age INT;

# 修改字段类型
ALTER TABLE mytable MODIFY COLUMN age INT;

# 修改字段名
ALTER TABLE mytable CHANGE COLUMN age age INT;

# 删除字段
ALTER TABLE mytable DROP COLUMN age;


# 根据一个表结构创建一个新表
CREATE TABLE mytable2 LIKE mytable;

# 根据表中的所有内容, 创建一个新表
CREATE TABLE mytable2 AS SELECT * FROM mytable;
```

### 表的增删改查

```sql
# 插入数据
INSERT INTO mytable (id, name) VALUES (1, '张三');

# 插入多条数据
INSERT INTO mytable (id, name) VALUES (1, '张三'), (2, '李四');

# 插入查询结果
INSERT INTO mytable (id, name) SELECT id, name FROM mytable2;

# 删除数据
DELETE FROM mytable WHERE id = 1;

# 更新数据
UPDATE mytable SET name = '王五' WHERE id = 1;

# 查询数据 select 关键字
# select 用于从一个或者多个表检索选中的行
SELECT * FROM mytable;

# 查询指定字段
SELECT id, name FROM mytable;

# 查询指定字段, 并给字段起别名
SELECT id AS id, name AS name FROM mytable;

# where 查询条件
SELECT * FROM mytable WHERE id = 1;
SELECT * FROM mytable WHERE id > 1;
SELECT * FROM mytable WHERE id < 1;
SELECT * FROM mytable WHERE id >= 1;
SELECT * FROM mytable WHERE id <= 1;
SELECT * FROM mytable WHERE id != 1;

# 逻辑运算符
SELECT * FROM mytable WHERE id = 1 AND name = '张三';
SELECT * FROM mytable WHERE id = 1 OR name = '张三';
SELECT * FROM mytable WHERE NOT id = 1;

# 模糊查询
# % 表示任意字符
# _ 表示一个字符
SELECT * FROM mytable WHERE name LIKE '%张%';
SELECT * FROM mytable WHERE name LIKE '_张%';

# IN 用于指定一个或多个值
SELECT * FROM mytable WHERE id IN (1, 2, 3);

# 范围查询
SELECT * FROM mytable WHERE id BETWEEN 1 AND 3;

# 空值查询
SELECT * FROM mytable WHERE name IS NULL;

# 非空查询
SELECT * FROM mytable WHERE name IS NOT NULL;

# 排序 order by 关键字
SELECT * FROM mytable ORDER BY id ASC;
SELECT * FROM mytable ORDER BY id DESC, name ASC;

# 分页查询
SELECT * FROM mytable LIMIT 10 OFFSET 0;
SELECT * FROM mytable LIMIT 10, 10;
```

### 聚合函数

聚合函数默认把表中的所有行进行计算, 并返回一个值

- 聚合函数用于对一组值进行计算, 并返回一个值
- 聚合函数通常与 GROUP BY 一起使用
- 聚合函数通常与 HAVING 一起使用

```sql
# 计算表中所有行数
SELECT COUNT(*) FROM mytable;

# 求和
SELECT SUM(id) FROM mytable;
SELECT SUM(id) FROM mytable WHERE id > 1;

# 求平均值
SELECT AVG(id) FROM mytable;

# 求最大值
SELECT MAX(id) FROM mytable;

# 求最小值
SELECT MIN(id) FROM mytable;

# 去重
SELECT COUNT(DISTINCT price) FROM mytable;

# 分组后计算  得到的列 是分组后的列
SELECT COUNT(*) FROM mytable GROUP BY id;

# 分组后求和
SELECT id, SUM(id) FROM mytable GROUP BY id;

# 分组后求平均值
SELECT id, AVG(id) FROM mytable GROUP BY id;

# 分组求最大值
SELECT id, MAX(id) FROM mytable GROUP BY id;

# 分组求最小值
SELECT id, MIN(id) FROM mytable GROUP BY id;

# Having 关键字 对分组后的数据进行过滤
SELECT id, SUM(id) FROM mytable GROUP BY id HAVING SUM(id) > 1;
```

### 数据类型

- 数值类型
  - 整数类型: TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT (1 字节, 2 字节, 3 字节, 4 字节, 8 字节)
  - 浮点数类型: FLOAT, DOUBLE (4 字节, 8 字节)
  - 定点数类型: DECIMAL (10 字节)
- 日期和时间类型
  - YEAR (1 字节) 年份 以 YYYY 表示
  - DATE (4 字节) 日期 以 YYYY-MM-DD 表示
  - TIME (3 字节) 时间 以 HH:MM:SS 表示
  - DATETIME (8 字节) 日期时间 以 YYYY-MM-DD HH:MM:SS 表示
  - TIMESTAMP (4 字节) 时间戳 以 YYYY-MM-DD HH:MM:SS 表示
- 字符串类型
  - CHAR (定长字符串, 最大长度 255 字节), 被查询时会自动删除末尾的空格
  - VARCHAR (可变长度字符串, 最大长度 65535 字节), 被查询时不会删除末尾的空格
  - TEXT (最大长度 65535 字节)
- 二进制类型
  - BINARY (定长二进制字符串, 最大长度 255 字节)
  - VARBINARY (可变长度二进制字符串, 最大长度 65535 字节)
  - BLOB (最大长度 65535 字节)
- 布尔类型
  - BOOLEAN (布尔值, 最大长度 1 字节)
- 枚举类型
  - ENUM (枚举值, 最大长度 255 字节)
- 集合类型
  - SET (集合值, 最大长度 255 字节)

### 表约束

- 主键约束 PRIMARY KEY (主键约束, 唯一且非空)
  - 一张表中, 只能有一个主键, 主键可以由一个或多个字段组成, 主键可以自动递增
  - 是表中唯一的索引
  - 不能为空
- 唯一约束 UNIQUE (唯一约束, 唯一且非空)
  - 一张表中, 只能有一个唯一约束, 唯一约束可以由一个或多个字段组成, 唯一约束可以自动递增 (手机号, 身份证号, 邮箱...)
- 自动递增约束 AUTO_INCREMENT (自动递增约束)
  - 例如用户 id, 订单 id, 商品 id 等
- 非空约束 NOT NULL (非空约束)
  - 不能为空
- 默认约束 DEFAULT (默认约束)
  - 当插入数据时, 如果没有指定值, 则使用默认值
- 外键约束 FOREIGN KEY (外键约束)
  - 外键约束用于限制引用表中的数据, 保证引用表中的数据完整性和一致性
- 检查约束 CHECK (检查约束)
  - 检查约束用于限制插入数据的条件, 保证插入数据的有效性

### 多表查询

外键(foreign key)约束: 用于限制引用表中的数据, 保证引用表中的数据完整性和一致性

- 主表(父表): 被引用的表
- 从表(子表): 引用主表的表
- 主表中的数据发生变化, 从表中的数据也会发生变化

多表查询: 用于连接两个或多个表, 并返回一个结果集

- 连接查询
  - 连接查询用于连接两个或多个表, 并返回一个结果集
  - 连接查询分为内连接和外连接
  - 内连接用于连接两个或多个表, 并返回一个结果集
  - 外连接用于连接两个或多个表, 并返回一个结果集

```sql
# 添加一个 外键约束
ALTER TABLE mytable1 ADD CONSTRAINT fk_mytable1_mytable2 FOREIGN KEY (xxx_id) REFERENCES mytable2 (id);

# 修改外键 action
ALTER TABLE mytable1 ADD CONSTRAINT fk_mytable1_mytable2 FOREIGN KEY (xxx_id) REFERENCES mytable2 (id) ON DELETE RESTRICT ON UPDATE CASCADE;

# SQL JOIN 关键字
# 内连接
SELECT * FROM mytable1 INNER JOIN mytable2 ON mytable1.id = mytable2.id;

# 左连接 以左表为主
SELECT * FROM mytable1 LEFT JOIN mytable2 ON mytable1.id = mytable2.id;
SELECT * FROM mytable1 LEFT JOIN mytable2 ON mytable1.id = mytable2.id WHERE mytable2.id IS NULL;


# 右连接 以右表为主
SELECT * FROM mytable1 RIGHT JOIN mytable2 ON mytable1.id = mytable2.id;
SELECT * FROM mytable1 RIGHT JOIN mytable2 ON mytable1.id = mytable2.id WHERE mytable1.id IS NULL;

# 全连接
SELECT * FROM mytable1 FULL JOIN mytable2 ON mytable1.id = mytable2.id;
```

### 多对对关系数据

- 一对一关系数据: 一个主表只能有一个从表, 一个从表只能有一个主表
- 一对多关系数据: 一个主表可以有多个从表, 一个从表只能有一个主表
- 多对多关系数据: 一个主表可以有多个从表, 一个从表可以有多个主表

```sql
# 一对一关系数据
# 例: 用户表和用户详情表
# 用户表: 主表, 用户id, 用户名, 用户密码, 用户邮箱, 用户手机号
# 用户详情表: 从表, 用户id, 用户姓名, 用户性别, 用户年龄, 用户地址

# 一对多关系数据
# 例: 用户表和订单表 一个用户可以有多个订单
# 用户表: 主表, 用户id, 用户名, 用户密码, 用户邮箱, 用户手机号
# 订单表: 从表, 订单id, 订单金额, 订单状态, 订单创建时间, 订单用户id

# 多对多关系数据
# 例: 用户表和商品表 一个用户可以购买多个商品, 一个商品可以被多个用户购买
# 用户表: 主表, 用户id, 用户名, 用户密码, 用户邮箱, 用户手机号
# 商品表: 从表, 商品id, 商品名称, 商品价格, 商品库存, 商品描述

# 多对多关系数据需要通过中间表来实现
# 中间表: 用户id, 商品id

```

```sql
### 多对多
# 学生 和 课程
# 学生表: 学生id, 学生姓名, 学生年龄, 学生性别
# 课程表: 课程id, 课程名称, 课程价格, 课程描述
# 中间表: 学生id, 课程id

CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description VARCHAR(200) NOT NULL
);

# 多对多会建立中间表
CREATE TABLE IF NOT EXISTS student_course (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses (id) ON DELETE CASCADE ON UPDATE CASCADE,
    -- PRIMARY KEY (student_id, course_id)

);


-- 学生选课
INSERT INTO student_course (student_id, course_id) VALUES (1, 1);
INSERT INTO student_course (student_id, course_id) VALUES (2, 2);

-- 查询所有有选课的学生, 选择了哪些课程
SELECT stu.name, c.name FROM students as stu
JOIN student_course AS ssc ON stu.id = ssc.student_id
JOIN courses AS c ON ssc.course_id = c.id;

-- 查询所有学生选课情况
SELECT stu.name, c.name FROM students as stu
LEFT JOIN student_course AS ssc ON stu.id = ssc.student_id
LEFT JOIN courses AS c ON ssc.course_id = c.id;

-- 查询哪些学生没有选课
SELECT stu.name FROM students as stu
LEFT JOIN student_course AS ssc ON stu.id = ssc.student_id
LEFT JOIN courses AS c ON ssc.course_id = c.id
WHERE c.id IS NULL;

-- 查询哪些课程没有学生选课
SELECT c.name FROM courses as c
LEFT JOIN student_course AS ssc ON c.id = ssc.course_id
LEFT JOIN students AS stu ON ssc.student_id = stu.id
WHERE stu.id IS NULL;

-- 某个学生选了哪些课程
SELECT c.name FROM courses as c
JOIN student_course AS ssc ON c.id = ssc.course_id
JOIN students AS stu ON ssc.student_id = stu.id
WHERE stu.id = 1;
```

### 数据转为数组对象

```sql
-- 将联合查询数据转为对象 (一对多)
SELECT product.id as id, product.name as name,
JSON.OBJECT(
    'id', category.id,
    'name', category.name
) as category
FROM product
JOIN category ON product.category_id = category.id;

-- 查询到的多条数据, 组织成对象, 放入一个数组
SELECT stu.id as id, stu.name as name,
JSON_ARRAYAGG(
    JSON_OBJECT(
        'id', c.id,
        'name', c.name
    )
) as courses
FROM students as stu
JOIN student_course AS ssc ON stu.id = ssc.student_id
JOIN courses AS c ON ssc.course_id = c.id
GROUP BY stu.id;
```
