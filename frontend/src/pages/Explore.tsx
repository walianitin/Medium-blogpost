import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import Header from '../components/Header';
import { Skeleton } from '../components/ui/skeleton';


interface Author {
    name: string;
}

interface Blog {
    key?: string;
    title: string;
    content: string;
    author: Author;
    url: string;
}

const backend_url = "https://backedn.walianitin406.workers.dev";

export default function DashBoard() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [Loader,setloader]=useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const getAuthHeader = () => {
        const token = localStorage.getItem('authToken');
        return token ? `Bearer ${token}` : '';
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate("/signin");
            return;
        }

        const fetchBlogs = async () => {
            try {
                setLoading(true);
                setError('');
                const authHeader = getAuthHeader();
                const response = await axios.get(`${backend_url}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization: authHeader.split(" ")[1]
                    }
                });
                
                const blogsData = response.data.posts || response.data.blogs || [];
                setBlogs(Array.isArray(blogsData) ? blogsData : []);
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setError('Failed to load blogs. Please try again.');
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [navigate]);

    setTimeout(() => {
        setloader(false)
    }, 3000);
    return Loader ? (
        <>
             
         <div className="flex items-center scale-110 gap-3  justify-center h-screen ">
      <Skeleton className="h-12 w-12 rounded-full bg-slate-300" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-slate-300" />
        <Skeleton className="h-4 w-[200px] bg-slate-300" />
      </div>
    </div>
        </>
    ) : (
        <div className="w-screen min-h-screen bg-gradient-to-l from-white via-blue-100 to-white">
             <Header></Header>
            <div className="max-w-5xl rounded-lg p-2 translate-y-5  mx-auto px-4 py-8  bg-gradient-to-b from-white via-blue-100 to-white">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Stories</h1>
                    <p className="text-gray-600">Discover amazing stories from our community</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                {blogs.length === 0 && !loading && !error ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📝</div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Stories Yet</h3>
                        <p className="text-gray-500 mb-6">Be the first to share your story with the community!</p>
                        <button 
                            onClick={() => navigate('/write')}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                            Write Your Story
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {blogs.map((blog, index) => (
                            <Content 
                                key={blog.key || `blog-${index}`}
                                url={blog.url}
                                author={blog.author?.name || 'Unknown Author'}
                                title={blog.title}
                                content={blog.content}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

