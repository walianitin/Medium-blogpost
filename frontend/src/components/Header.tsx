import {TfiWrite} from "react-icons/tfi"
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/company.jpeg" alt="logo" height={70} width={30} className="rounded-md" />
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