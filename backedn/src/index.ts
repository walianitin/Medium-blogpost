import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog.js'
import { cors } from 'hono/cors'
import { test } from './routes/test'
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()
app.use('/*', cors())
app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)
app.route('/test', test)

export default app
