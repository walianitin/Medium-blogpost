import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clean existing data
  await prisma.post.deleteMany()
  await prisma.user.deleteMany()

  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: 'john.doe@example.com',
      name: 'John Doe',
      password: 'password123',
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
      password: 'password123',
    },
  })

  const user3 = await prisma.user.create({
    data: {
      email: 'alex.johnson@example.com',
      name: 'Alex Johnson',
      password: 'password123',
    },
  })

  // Create posts
  await prisma.post.createMany({
    data: [
      {
        title: 'Getting Started with React',
        content:
          "React is a popular JavaScript library for building user interfaces. In this post, we'll explore the basics of React and how to get started with your first React application.",
        published: true,
        authorId: user1.id,
      },
      {
        title: 'Understanding TypeScript',
        content:
          'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static type-checking along with the latest ECMAScript features.',
        published: true,
        authorId: user1.id,
      },
      {
        title: 'Introduction to Prisma',
        content:
          'Prisma is a next-generation ORM that helps developers build GraphQL and REST APIs more efficiently and with fewer bugs.',
        published: false,
        authorId: user2.id,
      },
      {
        title: 'Building RESTful APIs with Node.js',
        content:
          'Node.js is a powerful platform for building server-side applications. Learn how to create robust RESTful APIs using Express.js and best practices.',
        published: true,
        authorId: user2.id,
      },
      {
        title: 'Modern CSS Techniques',
        content:
          'Explore modern CSS features like Grid, Flexbox, and CSS Variables that make styling web applications easier and more maintainable.',
        published: true,
        authorId: user3.id,
      },
      {
        title: 'Database Design Best Practices',
        content:
          'Learn about normalization, indexing, and other database design principles that will help you build efficient and scalable databases.',
        published: false,
        authorId: user3.id,
      },
      {
        title: 'JavaScript ES6+ Features',
        content:
          'Discover the latest JavaScript features including arrow functions, destructuring, async/await, and modules that make your code cleaner and more efficient.',
        published: true,
        authorId: user1.id,
      },
      {
        title: 'Docker for Developers',
        content:
          'Docker containers have revolutionized how we deploy applications. Learn the fundamentals of containerization and how to use Docker in your development workflow.',
        published: true,
        authorId: user2.id,
      },
    ],
  })

  console.log('✅ Database has been seeded successfully!')
  console.log(`📊 Created ${await prisma.user.count()} users`)
  console.log(`📝 Created ${await prisma.post.count()} posts`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error('❌ Error seeding database:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
