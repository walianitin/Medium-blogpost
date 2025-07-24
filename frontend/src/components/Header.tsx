import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TfiWrite } from "react-icons/tfi";
import { FaUser, FaBell, FaSearch, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('authToken');
        navigate('/signin');
    };

    const handleWriteClick = () => {
        navigate('/write');
    };

    return (
        <div className= "    flex items-center justify-center   ">
    
                <div className="flex flex-row items-center  w-full  px-10 justify-between  py-2 rounded-lg" >
                 
                    <div className="flex items-center space-x-4  ">
                        <div 
                            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => navigate('/')}
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">B</span>
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Blogger
                            </h1>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center flex-1 max-w-lg mx-8 ">
                        <div className="relative w-full">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search stories..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                            />
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4 ">
                        {/* Write Button */}
                        <button
                            onClick={handleWriteClick}
                            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            <TfiWrite size={16} />
                            <span className="hidden sm:inline">Write</span>
                        </button>

                        {/* Notifications */}
                        <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors duration-200">
                            <FaBell size={18} />
                        </button>

                        {/* Profile Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
                            >
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                    <FaUser className="text-white" size={14} />
                                </div>
                            </button>

                            {/* Dropdown Menu */}
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                    <div className="px-4 py-2 border-b border-gray-100">
                                        <p className="text-sm font-medium text-gray-900">Your Account</p>
                                        <p className="text-xs text-gray-500">Manage your profile</p>
                                    </div>
                                    
                                    <button
                                        onClick={() => navigate('/profile')}
                                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        <FaUser size={14} />
                                        <span>Profile</span>
                                    </button>
                                    
                                    <button
                                        onClick={() => navigate('/')}
                                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        <FaCog size={14} />
                                        <span>Settings</span>
                                    </button>
                                    
                                    <div className="border-t border-gray-100 mt-1 pt-1">
                                        <button
                                            onClick={handleSignOut}
                                            className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                        >
                                            <FaSignOutAlt size={14} />
                                            <span>Sign Out</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="md:hidden mt-3">
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search stories..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                        />
                    </div>
                </div>
           
        </div>
    );
}