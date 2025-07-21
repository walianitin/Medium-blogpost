import Herosection from "./HeroSection";

interface Blog {
    url: string;
    author: string;
    title: string;
    content: string;
}

export default function Content(data: Blog) {
    // Handle potential missing data
    const safeData = {
        url: data?.url || "",
        author: data?.author || "Unknown Author",
        title: data?.title || "Untitled",
        content: data?.content || "No content available"
    };

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
            <Herosection Avatar_url={safeData.url} author_name={safeData.author} />
            
            <div className="mt-4 space-y-3">
                <h1 className="text-xl font-bold text-gray-900 leading-tight hover:text-blue-600 transition-colors duration-200">
                    {safeData.title}
                </h1>
                
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {safeData.content.length > 150 
                        ? `${safeData.content.substring(0, 150)}...` 
                        : safeData.content
                    }
                </p>
                
                <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-gray-500">
                        Read more
                    </span>
                    <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                            ♥
                        </button>
                        <button className="text-gray-400 hover:text-blue-500 transition-colors">
                            💬
                        </button>
                        <button className="text-gray-400 hover:text-green-500 transition-colors">
                            🔗
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}          