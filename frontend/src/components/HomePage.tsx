import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    
    return (
        <div className="flex justify-center h-screen pt-12 bg-[#FFFDF6]">
            <div className="w-9/12 h-[77%] bg-[#EAEFEF] rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30"> 
                this will have the animation 
            </div>
        </div>
    )
}