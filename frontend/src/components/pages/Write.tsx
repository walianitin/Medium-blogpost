import { useState } from "react"
import { Blog } from "../../utils/types"

export default function Write(){
    const [data,setdata]=useState<Blog[]>([])
    const author= 
    return <div className=" bg-red-300">
            <input  placeholder="Title" className=" border-none" onChange={(e)=>{
            setdata([{ ...data[0], title: e.target.value }])
            }}></input>
            <input  placeholder="content" className=" border-none" onChange={(e)=>{
            setdata([{ ...data[0], content: e.target.value }])
            }}></input>
{JSON.stringify(data)}
    </div>
}