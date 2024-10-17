import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Quotes from "../components/Quotes"; // Quotes component needs to have a heading and subheading prop

function buttonClick   () {
    alert("Button clicked");
}

export default function Signin() {
    connst 
    return (
    <div className="justify-between mx-2 ">
        <div className="flex flex-row items-center">
            {/* Left Side: Form */}
            <div className="flex flex-col p-12 rounded-lg w-1/2">
                <div className="mb-6  flex flex-col items-center justify-center ">
                    <Heading label="Login " ></Heading>
                        <div className="flex flex-row p-1"> <Bottom label="Create an account?" linktext="Signup" to="/signup"></Bottom></div>
                 </div>
               
                {/* <Input label="Username" placeholder="Enter your username"  ></Input> */}
                <Input label="Email" placeholder="m@example.com" ></Input>
                <Input label="Password" placeholder="Enter your password"></Input>
               
               <div className="p-3"><Button label="Sign In" onClick={buttonClick}></Button></div>
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
