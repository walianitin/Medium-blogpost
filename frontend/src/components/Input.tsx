export default function Input({label,placeholder})
{
    return <div>
        <div>
            {label}
        </div>
        <input placeholder={placeholder}></input>
    </div>
}