import { Link } from "react-router-dom";

interface LinkButtonProps
{
    target: string;
    name: string;
    fontsize?: string;
}
export default function LinkButton({ target, name, fontsize }: LinkButtonProps)
{
    return (
        <Link to={target} className="button" style={{ fontSize: fontsize }}>{name}</Link>
    )
}