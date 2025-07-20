import {TfiWrite} from "react-icons/tfi"
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#F2F2F2] border-blue-800  px-6 py-4 flex items-center justify-between  sticky  top-0 z-50 bg-origin-border ">
      <div className="flex items-center ">
        <span className=" text-nowrap text-4xl w-fit h-30rem  font-bold font-serif cursor-pointer" onClick={()=>navigate("")}>Medium </span>
      </div>
      <span className="  flex flex-row gap-10 p-3 rounded-xl shadow-gray-300 "> 

      <button className="flex items-center gap-2  rounded-full  hover:text-2xl duration-300" onClick={() => navigate("/write")}> <TfiWrite className="w-4 h-4" />
        Write
      </button>    
      <img  src="/avatar.png" alt="avatar" height={40}  width={60}></img>
      </span>
    </div>
  );
}