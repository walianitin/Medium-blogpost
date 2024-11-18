import { useState } from "react";
import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Quotes from "../components/Quotes"; // Quotes component needs to have a heading and subheading prop
import { Navigate } from "react-router-dom";
import {BACKEND_URL} from "../../config"
import axios from "axios";


interface labeleedinput{
    label:string,
    placeholder:string,
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string 
}

export default function Signup() {
    const [postInputs,setpostInputs]=useState({ 
        name:"",
        password:"",
        email:""  
    }) 
     async function buttonClick(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);

                const jwt=response.data;
                localStorage.setItem("jwt",jwt);
                Navigate("/blogs")
        }catch(e){
            alert("error in the request");
    
        }
    }
    
    return (  
    <div className="justify-between mx-2 ">
        <div className="flex flex-row items-center">
            <div className="flex flex-col p-12 rounded-lg w-1/2">
                <div className="mb-6  flex flex-col items-center justify-center ">
                    <Heading label="Create an account" ></Heading>
                        <div className="flex flex-row p-1"> <Bottom label="Already have an account?" linktext="Login" to="/signin"></Bottom></div>
                 </div>
               
                <Input label="Username" placeholder="Enter your username" onChange={(e)=>{
                        setpostInputs({
                            ...postInputs,
                            name:e.target.value
                        })
                }}></Input>
                <Input label="Email" placeholder="m@example.com"  onChange={(e)=>{
                    setpostInputs({
                          ...postInputs,
                        email:e.target.value
                    })
                }} ></Input>
                <Input label="Password" placeholder="Enter your password" type="Password" onChange={(e)=>{
                    setpostInputs({
                        ...postInputs,
                        password:e.target.value
                    })
                }}>  </Input> 
               <div className="p-3"><Button label="Sign Up" onClick={buttonClick}></Button></div>
            </div>

            {/* Right Side: Quote */}
            <div className=" flex items-center justify-center w-1/2 bg-slate-200 h-screen shadow-md p-4 text-center text-2xl italic">
                <Quotes 
                    heading="“The customer service I received was exceptional. The support team went above and beyond to address my concerns.”" 
                    subHeading="Jules Winnfield, CEO, Acme Inc"
                    className="text-center text-lg"
                    />
            </div>
        </div>
    </div>
    );
}
