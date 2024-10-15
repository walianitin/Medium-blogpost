import {Link} from "react-router-dom"
export default  function Bottom({label,to,linktext})
{
    return (
        <>
        <div>
            {label}
        </div>
        <Link className=" pointer underline pl-1 curson-pointer " to={to}>
                {linktext}
        </Link>
        </>
    )
}