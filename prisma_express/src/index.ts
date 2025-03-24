import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

// 注册用户
app.post("/signup", async (req, res) => {
  const { name, email } = req.body
  const user = await prisma.user.create({
    data: { name, email },
  })
  res.json(user)
})

// 新建文章
app.post("/posts", async (req, res) => {
  const { title, content, authorEmail } = req.body
  const post = await prisma.post.create({
    data: {
      title,
      content,
      author: {
        connect: {
          email: authorEmail,
        },
      },
    },
  })
  res.json(post)
})

// 给文章阅读量+1
app.post("/posts/:id/views", async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.update({
    where: { id: parseInt(id) },
    data: {
      viewCount: {
        increment: 1,
      },
    },
  })
  res.json(post)
})

// 发布文章
app.post("/publish/:id", async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.update({
    where: { id: parseInt(id) },
    data: {
      published: true,
    },
  })
  res.json(post)
})

// 查询某个用户草稿
app.get("/user/:id/drafts", async (req, res) => {
  const { id } = req.params
  const drafts = await prisma.user
    .findUnique({
      where: {
        id: parseInt(id),
      },
    })
    .posts({
      where: {
        published: false,
      },
    })
  res.json(drafts)
})

// 查询单个文章
app.get("/post/:id", async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) },
  })
  res.json(post)
})

// 查询所有已发布文章
app.get("/feed", async (req, res) => {
  const { take, skip } = req.query
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    skip: parseInt(skip as string) || 0,
    take: parseInt(take as string) || 10,
  })
  res.json(posts)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
