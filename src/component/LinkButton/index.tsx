import { Link } from "react-router-dom";

interface LinkButtonProps{
    to:any,
    children: React.ReactNode
}

const Index = (props:LinkButtonProps)=>{
    const {to, children} = props;
    return <Link
    className="btn btn-primary"
    role="button"
    to={to}
  >
    {children}
  </Link>
}
export default  Index;