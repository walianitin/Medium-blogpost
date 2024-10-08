import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";
import {createPostInput,updatePostInput} from "../../../common/dist/index"
export const  blogRouter= new Hono<{
    Bindings:{
        DATABASE_URL:string
        JWT_SECRET: string;
    },
    Variables:
    {
        userId:string
    }
}>()
blogRouter.use("/*", async (c,next )=>
{
    const authHeader = c.req.header("Authorization") || "";
    try{
        const user = await verify(authHeader, "NITIN_WALIA");
        if(user)
        {
            //@ts-ignore
            c.set("userId",user.id)
            await next();
        }else 
        {
            c.status(403);
            return c.json({
                message:"you are not logged in"
            })
        }
    }catch(err)
    {
        console.log(err);
        return c.json({
            message:"error in the middleware"
        })
    }
})


blogRouter.post('/post',async(c)=>
{
    const body= await c.req.json();
    const {success} =createPostInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }
    const authorId=c.get("userId") 
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

    const blog= await prisma.post.create({
       data: {
            title:body.title,
            content:body.content,
            authorId: authorId
        }}    
    )
        return c.json(
            {
                message:"blog created successfully",
                id:blog.id
            }
        )
})


blogRouter.get('/user_post',async (c)=>
{
    const id= c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

    try{
        const post =await prisma.post.findFirst({
            where:{
                id:id
            },
            select :
            {
                id:true,
                title:true,
                content:true,
                author:
                {
                    select:
                    {
                        name: true
                    }
                }
            }
        })
        return c.json({post})
    }catch(e) {
        c.status(411); // 4
        return c.json({
            message: "Error while fetching blog post"
        });
    }
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const posts = await prisma.post.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });

    return c.json({
        posts
    })
})


blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const { success } = updatePostInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post = await prisma.post.update({
        where: {
            id: body.id
        }, 
        data: {
            title: body.title,
            content: body.content
        }
    })

    return c.json({
        id: post.id,
        message:"update are successfully done"
    })
})
