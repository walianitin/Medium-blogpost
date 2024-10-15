import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Bottom from "../components/Bottom";
function buttonClick()
{
   // console.log(buttonclicked)
    <alert className="log">alert</alert>
}

export default function Signin() {
    return (
        <div>
                <Heading label={"Signin"}></Heading>
               <Input label={"enter your email"} placeholder={"123@gmail.com"}></Input>
               <Input label={"enter your password"} placeholder={"122Ad@@"}></Input>
               <Button onClick={buttonClick} label={"Signin"}></Button>
               <Bottom label={"Create a account "} to={"/signup"} linktext={"Signup"}> </Bottom>
        </div>
    )
}