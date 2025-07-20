import Herosection from "./HeroSection";
import {Blog } from "../utils/types";

interface ContentProps {
    data: Blog;
}

export default function Content({ data }: ContentProps) {
    return <div className="bg-white border border-gray-200 rounded-lg m-2 p-4 shadow-sm hover:shadow-md  hover:-translate-y-8 hover:gap-4 hover:scale-105  duration-300 transition-all cursor-pointer">
        <Herosection Avatar_url={data.url} author_name={data.author.name}></Herosection>
        <span className="flex flex-col justify-center items-start gap-1 "> 
            <h1 className=" font-bold hover:text-blue-600 hover:scale-105 transition-all duration-200"> {data.title}</h1>
            <p className="hover:text-gray-700 transition-all duration-200"> {data.content}</p>
        </span>
    </div>
}          