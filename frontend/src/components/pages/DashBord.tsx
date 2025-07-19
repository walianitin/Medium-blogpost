import { useEffect, useState } from 'react';
import axios from 'axios';
const backend_url = " http://localhost:8787"
export default function DashBoard() {
    const [blogs,setblogs] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get(`${backend_url}/api/v1/blog/bulk`, {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdmODEyZmIxLTRiN2QtNGQ5YS05ZDM5LTUwZTYxOGUwMjJlYyJ9.48hgGmXwUyzsVBXxsns43oyNnavc1hGPmv3m8zUKUt0"
            }
            });
            setblogs(response.data);
        };
        fetchBlogs();
    }, []);
    console.log(blogs);
    if(!blogs) return <div>Loading...</div>;
    return (
         <div>
                <ul>
                    {blogs.map((blog)=>{
                        return <li>
                            <h1>{blog}</h1>
                        </li>
                    })}
                </ul>
        </div>
    );
}
