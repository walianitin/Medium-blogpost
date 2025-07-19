import Herosection from "./HeroSection";
import {Blog } from "../utils/types";

interface ContentProps {
    data: Blog;
}

export default function Content({ data }: ContentProps) {
    return <div className="bg-white border border-gray-200 rounded-lg m-2 p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
        <Herosection Avatar_url={data.url} author_name={data.author.name}></Herosection>
        <span className="flex flex-col justify-center items-start gap-1 "> 
            <h1 className=" font-bold"> {data.title}</h1>
            <p> {data.content}</p>
        </span>
    </div>
}          