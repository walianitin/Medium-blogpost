import { useState } from "react"
import Input from "../components/label_Input"
import axios from "axios"
import {BACKEND_URL} from "../../config"
import { toast,Toaster} from "sonner"
export  default function Signup(){
    const [data,setdata]=useState<Signupinput>(
        {
            name:"",
            email: "",
		    password: "",
        }
    )
async function sendRequest() {
    try{
        const response =await axios.post(`${BACKEND_URL}/api/v1/user/signup`,data);
        const jwt= response.data.jwt;
        localStorage.setItem("token", jwt);
        if(response.data.jwt!=null) {
            const success_message="login successfully";
            toast.success(success_message);
        }
    }catch(error:any){
        console.warn(error);
			const errorMessage =
				error.response?.data?.message ?? "Invalid Inputs";
			toast.warning(errorMessage, {
				duration: 2000,
			});
    }
} 
return <div>
    {JSON.stringify(data)}
        <div className="flex justify-center h-screen bg-slate-300">
            <div className="flex flex-col justify-center ">
                <div className="text-center m-30 text-xl font-bold"> Signup </div>
                <div className=" w-80 p-2 h-max px-4 text-center bg-white rounded-lg">
                <Input placeholder={"joe"} label={"firstName"}  type={"text"}    onChange={(e) => {
                    console.log("Input onChange triggered:", e.target.value);
                    onChange?.(e);
                }}></Input>
                <Input placeholder={"joe@gmail.com"} label={"Email"}  type={"text"}  onChange={(e) => setdata((prev) => ({ ...prev, email: e.target.value }))}></Input>
                <Input placeholder={"***"} label={"password"}  type={"password"}  onChange={(e) => setdata((prev) => ({ ...prev, password: e.target.value }))}></Input>

                <button className="mt-5 text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={sendRequest}> signup</button>
                </div>
            </div>
        </div>
</div>
}




interface Signupinput{
    name:string,
    email:string,
    password:string
}