
interface argument{
    Avatar_url:string,
    author_name:string
}
export default function Herosection({Avatar_url,author_name}:argument){
    return <div className=" flex flex-row gap-1  items-center  justify-start text-xs  w-fit rounded-md font-black ">
        <img src="/avatar.png" alt="pic"  height={30} width={30} className=" rounded-lg "/>
        <p> {Avatar_url}</p>
        <p >{author_name}</p>
    </div>
}