

export default function Hero() {
    return (
        <div className=" h-300 mt-30 whitespace-nowrap  flex flex-col justify-center items-center  font-medium  text-7xl ">
                <div className=" max-w-5xl flex flex-col gap-2 mt-20 pt-20 text-shadow-[0_35px_35px_rgb(10_10_2_/_0.25)] ">
                 <button className=" w-fit left-80 text-lg bg-blue-500 opacity-70 text-center  rounded-md  px-4 py-2  text-white hover:bg-blue-600  "><p className="drop-shadow-sm text-shadow-lg bg-transparent -top-20">Explore more ..</p></button>      
 <div className="blur-xl"></div>

                    <h1 className=" ">Human stories & ideas</h1>
<p className="text-xl whitespace-nowrap font-mono text-blue-600 ">
    A place to read, write, and deepen your understanding
</p> 
    
 <div className="blur-xl"></div>
            <img src="/blogging.webp" height={220} width={1500} className=" hover:opacity-55 opacity-30 transition-opacity duration-300"></img>
                </div>
               
        </div>
    )
}   