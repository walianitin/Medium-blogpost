
import Hero from "../components/Hero"

import HeaderHome from "../components/HeaderHome"
export default function Home() {
    return (
        <div className="flex flex-col h-screen  bg-gradient-to-b from-white via-blue-100 to to-white ">
           <HeaderHome></HeaderHome>
             <Hero/>
        </div>
    )
}