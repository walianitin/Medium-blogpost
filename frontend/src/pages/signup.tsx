import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";
import Signin from "./signin";
function buttonClick()
{
   // console.log(buttonclicked)
    <alert className="log">alert</alert>
}

export default function Signup() {
    return (
        <>
        <Heading label="Signup"></Heading>
        <SubHeading label= "enter your information to create a account"></SubHeading>
        <Input label="enter you name " placeholder="Nitin"></Input>
        <Input label="enter your email " placeholder="nitin@gmail.com"></Input>
        <Input label="enter your password " placeholder="123f@saf"></Input>
        <Button label={"Signup"} onClick={buttonClick}></Button>
        <Bottom label="Already have an account?" linktext="Signin" to={"/signin"}></Bottom>

        </>
    )
}