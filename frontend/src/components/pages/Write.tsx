import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

interface BlogPost {
    title: string;
    content: string;
}

const backend_url = "http://localhost:8787"

export default function Write() {
    const [blogPost, setBlogPost] = useState<BlogPost>({
        title: "",
        content: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    // Auto-resize textarea function
    const autoResize = () => {
        const textarea = textareaRef.current
        if (textarea) {
            textarea.style.height = 'auto'
            textarea.style.height = textarea.scrollHeight + 'px'
        }
    }

    // Auto-resize on content change
    useEffect(() => {
        autoResize()
    }, [blogPost.content])

    const handleSubmit = async () => {
        if (!blogPost.title.trim() || !blogPost.content.trim()) {
            alert("Please fill in both title and content")
            return
        }

        setIsLoading(true)
        try {
            const response = await axios.post(`${backend_url}/api/v1/blog`, blogPost, {
                headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdmODEyZmIxLTRiN2QtNGQ5YS05ZDM5LTUwZTYxOGUwMjJlYyJ9.48hgGmXwUyzsVBXxsns43oyNnavc1hGPmv3m8zUKUt0",
                    "Content-Type": "application/json"
                }
            })
            
            if (response.status === 200 || response.status === 201) {
                alert("Blog post created successfully!")
                navigate("/home")
            }
        } catch (error) {
            console.error("Error creating blog post:", error)
            alert("Failed to create blog post. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-4 py-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-4">
                    <h1 className="text-3xl font-thin text-gray-900 mb-2">Write a New Story</h1>
                    <p className="text-gray-600 font-extralight">Share your thoughts with the world</p>
                </div>

                {/* Title Input */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={blogPost.title}
                        onChange={(e) => setBlogPost(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full text-4xl font-bold placeholder-gray-400 bg-transparent border-none outline-none resize-none py-4 text-gray-900"
                        style={{ border: 'none', boxShadow: 'none' }}
                    />
                </div>

                {/* Content Textarea - Auto-expanding */}
                <div className="mb-8">
                    <textarea
                        ref={textareaRef}
                        placeholder="Tell your story..."
                        value={blogPost.content}
                        onChange={(e) => {
                            setBlogPost(prev => ({ ...prev, content: e.target.value }))
                            autoResize()
                        }}
                        className="w-full text-lg placeholder-gray-400 bg-transparent border-none outline-none resize-none py-4 text-gray-700 leading-relaxed overflow-hidden"
                        style={{ 
                            border: 'none', 
                            boxShadow: 'none',
                            minHeight: '200px',
                            height: 'auto'
                        }}
                        rows={1}
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => navigate("/home")}
                        className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                        Cancel
                    </button>
                    
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading || !blogPost.title.trim() || !blogPost.content.trim()}
                        className={`px-8 py-3 rounded-full font-medium transition-all duration-200 ${
                            isLoading || !blogPost.title.trim() || !blogPost.content.trim()
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-green-600 text-white hover:bg-green-700 hover:scale-105 shadow-md hover:shadow-lg'
                        }`}
                    >
                        {isLoading ? 'Publishing...' : 'Publish'}
                    </button>
                </div>
            </div>
        </div>
    )
}