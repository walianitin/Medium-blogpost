
export default function Input({label,placeholder,type}:input ){
    return <div className="flex flex-col  bg-transparent m-2  shadow-sm border-cyan-200">
            <div className=" flex flex-col text-center font-extralight">
                <label className="">{label}</label>
                <input className="bg-transparent " type={type} placeholder={placeholder} />
            </div>
    </div>
}
interface input{
    placeholder:string,
    label:string,
    type:string,
}