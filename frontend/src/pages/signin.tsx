import { useState, ChangeEvent } from "react";
import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function buttonClick(password: string,navigate:any) {
    // Store password in localStorage (avoid in production)
    const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
    localStorage.setItem("password", password);
    alert("Logged in successfully!")
    navigate("/blog")
}

export default function Signup() {
    const navigate =useNavigate();
    const [password, setPassword] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleButtonClick = () => {
        if (!password) {
            alert("Password is required.");
            return;
        }
        buttonClick(password,navigate);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <div className="flex flex-col items-center">
                    <Heading label="Login to Account"></Heading>
                    <div className="mt-4 flex">
                        <Bottom label="Don't have an account?" linktext="Signup" to="/signup"></Bottom>
                    </div>
                </div>

                <div className="mt-6">
                <Input
                        label="Name"
                        placeholder="Enter your Name"
                        type="text"
                        onChange={handleInputChange}
                    ></Input>
                    <Input
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        onChange={handleInputChange}
                    ></Input>
                </div>
                <div className="mt-6">
                    <Button label="Sign In" onClick={handleButtonClick}></Button>
                </div>
            </div>
        </div>
    );
}
