import { useNavigate } from "react-router-dom";

export default function HeaderHome(){
    const Navigate=useNavigate();
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-row items-center w-full px-10 justify-between py-4 rounded-lg">
                
                {/* Logo */}
                <div className="flex items-center">
                    <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Blogger
                        </h1>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center space-x-4">
                    {/* Explore Button */}
                    <button className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200" onClick={()=>Navigate("/explore")}>
                        Explore
                    </button>

                    {/* Sign In Button */}
                    <button className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"  onClick={() => Navigate("/signin")}>
                        Sign In
                    </button>

                    {/* Sign Up Button */}
                    <button
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                        onClick={() => Navigate("/signup")}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}