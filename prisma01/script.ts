import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  // 查询
  const result = await prisma.user.findMany()
  console.dir(result)
  // 插入
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  })

  // 更新
  await prisma.user.update({
    where: {
      email: "alice@prisma.io",
    },
    data: {
      name: "Bob",
    },
  })

  // 删除
  await prisma.user.delete({
    where: {
      email: "alice@prisma.io",
    },
  })

  // post
  await prisma.post.create({
    data: {
      title: "Hello World",
      content: "This is a post",
      authorId: 1,
    },
  })

  // user 关联 post
  await prisma.user.update({
    where: {
      id: 1,
    },
    data: { posts: { connect: { id: 1 } } },
  })

  await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: { posts: true },
  })

  // 查询范围
  await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      posts: true,
    },
  })

  // 过滤
  await prisma.user.findMany({
    where: {
      posts: {
        some: {},
      },
    },
  })

  // 分页
  await prisma.user.findMany({
    skip: 1, // 页数
    take: 1, // 查询数量
  })

  // 排序
  await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
