import { Hono } from 'hono'
export const test = new Hono()

test.get('/', async c => {
  return c.text('testbackend ')
})
