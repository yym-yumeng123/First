### 安装

```bash
npm install prisma --save-dev
npm install @prisma/client
npm install express --save
npm install ts-node --save-dev
```

### 初始化

```bash
# 初始化 prisma 创建 prisma 目录
npx prisma init
```

### 定义模型

```prisma
// prisma/schema.prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
```

```bash
# 生成 prisma 客户端
npx prisma generate
```

### 迁移数据库

```bash
# 迁移数据库
npx prisma migrate dev
```

### 启动服务

```bash
# 启动服务
npm run dev
```

### studio

```bash
# 启动 studio 可视化工具
npx prisma studio
```

