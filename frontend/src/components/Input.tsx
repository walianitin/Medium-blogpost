export default function Input({label,placeholder,onChange,type})
{
    return <div className="  flex flex-col shadow-sm p-3 text-start m-2 shadow-slate-200">
         <div>{label}</div>
         <div><input placeholder={placeholder}  type={type} onChange={onChange}></input></div> 
    </div>
}