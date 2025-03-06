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

# 添加数据
insert into mytable (id, name) values (1, '张三');

# 查询数据
select * from mytable;

# 更新数据
update mytable set name = '李四' where id = 1;

```


