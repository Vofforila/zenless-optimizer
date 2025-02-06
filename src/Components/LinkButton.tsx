import { Link } from "react-router-dom";

interface LinkButtonProps
{
    target: string;
    fontsize?: string;
    children: string;
}
const LinkButton: React.FC<LinkButtonProps> = ({ target, fontsize, children }: LinkButtonProps) =>
{
    return (
        <Link to={target} className="button" style={{ fontSize: fontsize }}>{children}</Link>
    )
}

export default LinkButton;