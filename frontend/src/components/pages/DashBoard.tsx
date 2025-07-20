import { useEffect, useState } from 'react';
import axios from 'axios';
import Content from '../Content';
import {Blog} from '../../utils/types'

const backend_url = "https://backedn.walianitin406.workers.dev"

export default function DashBoard() {
    const [blogs, setblogs] = useState<Blog[]>([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get(`${backend_url}/api/v1/blog/bulk`, {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdmODEyZmIxLTRiN2QtNGQ5YS05ZDM5LTUwZTYxOGUwMjJlYyJ9.48hgGmXwUyzsVBXxsns43oyNnavc1hGPmv3m8zUKUt0"
            }
            });
            setblogs(response.data.posts);
        };
        fetchBlogs();
    }, []);
    console.log(blogs);
    if(!blogs) return <div>Loading...</div>;
    return (
        <div className=' w-screen bg-gradient-to-br from-gray-50 to-white '>

         <div className='bg-gradient-to-br from-gray-50 to-white min-h-screen px-4 py-8 max-w-4xl mx-auto'>
            <div className='space-y-6 cursor-pointer'>
                {blogs.map((data, index) => {
                    return <Content data={data} key={data.key || index} ></Content>
                })}

            </div>
        </div>
        </div>
    );
}
