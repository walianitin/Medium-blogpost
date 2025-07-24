import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        name: '',
        password: ''
    });
  return (
    <>
    <div className="flex items-center justify-center min-h-screen ">
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl border border-blue-100">
    <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
            </div>
        </div>

        <h3 className="mt-4 text-2xl font-bold text-center text-black">Create Account</h3>

        <p className="mt-2 text-center text-gray-600">Join us today</p>

        <form>
            <div className="w-full mt-6">
                <input 
                    className="block w-full px-4 py-3 mt-2 text-black placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200" 
                    type="email" 
                    placeholder="Email Address" 
                    aria-label="Email Address"  
                    onChange={(e)=>setData({...data,email:e.target.value})}
                />
            </div>
            <div className="w-full mt-4">
                <input 
                    className="block w-full px-4 py-3 mt-2 text-black placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200" 
                    type="text" 
                    placeholder="Full Name" 
                    aria-label="Name" 
                    onChange={(e)=>setData({...data,name:e.target.value})} 
                />
            </div>

            <div className="w-full mt-4">
                <input 
                    className="block w-full px-4 py-3 mt-2 text-black placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200" 
                    type="password" 
                    placeholder="Password" 
                    aria-label="Password" 
                    onChange={(e)=>{
                        console.log(e.target)
                        setData({...data,password:e.target.value})
                    }} 
                />
            </div>

            <div className="flex items-center justify-center mt-6">
                <button
                    className="w-full px-6 py-3 text-sm font-semibold tracking-wide text-white capitalize transition-all duration-300 transform bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
                    onClick={async (e) => {
                        e.preventDefault();
                        try {
                            console.log('Sending data:', data);
                            const response = await axios.post(`https://backedn.walianitin406.workers.dev/api/v1/user/signup`, data);
                            console.log('Response:', response.data);
                            
                            // Set token in localStorage if received
                            const token = response.data.jwt || response.data.token;
                            if (token) {
                                localStorage.setItem('authToken', token);
                                navigate("/");
                            } else {
                                alert("Signup successful but no token received");
                            }
                        } catch (error) {
                            console.error('Signup error:', error);
                            alert("Signup failed. Please try again.");
                        }
                    }}
                >
                    Sign Up
                </button>
            </div>
        </form>
    </div>
    <div className="flex items-center justify-center py-4 text-center  bg-gray-400">
        <span className="text-sm text-gray-600 dark:text-gray-200">Already have an account? </span>

        <a href="/signin" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-700 hover:underline" >Signin</a>
    </div>
</div>
</div>
    </>
  )
}