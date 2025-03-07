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
- NoSQL 基于 key-value 键值对存储, 不需要经过SQL解析, 性能非常高。


### 什么是MySQL

- MySQL是一个关系型数据库管理系统, 由瑞典MySQL AB 公司开发, 属于Oracle旗下产品。
- MySQL是最流行的关系型数据库管理系统之一, 在WEB应用方面, MySQL是最好的RDBMS(Relational Database Management System, 关系型数据库管理系统)应用软件之一。



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

```

### 数据类型

- 数值类型
  - 整数类型: TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT (1字节, 2字节, 3字节, 4字节, 8字节)
  - 浮点数类型: FLOAT, DOUBLE (4字节, 8字节)
  - 定点数类型: DECIMAL (10字节)
- 日期和时间类型
  - YEAR (1字节) 年份 以 YYYY 表示
  - DATE (4字节) 日期 以 YYYY-MM-DD 表示
  - TIME (3字节) 时间 以 HH:MM:SS 表示
  - DATETIME (8字节) 日期时间 以 YYYY-MM-DD HH:MM:SS 表示
  - TIMESTAMP (4字节) 时间戳 以 YYYY-MM-DD HH:MM:SS 表示
- 字符串类型
  - CHAR (定长字符串, 最大长度255字节), 被查询时会自动删除末尾的空格
  - VARCHAR (可变长度字符串, 最大长度65535字节), 被查询时不会删除末尾的空格
  - TEXT (最大长度65535字节)
- 二进制类型
  - BINARY (定长二进制字符串, 最大长度255字节)
  - VARBINARY (可变长度二进制字符串, 最大长度65535字节)
  - BLOB (最大长度65535字节)
- 布尔类型
  - BOOLEAN (布尔值, 最大长度1字节)
- 枚举类型
  - ENUM (枚举值, 最大长度255字节)
- 集合类型
  - SET (集合值, 最大长度255字节)

