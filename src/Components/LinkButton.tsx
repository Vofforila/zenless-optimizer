import {Link} from "react-router-dom";
import React from "react";

interface LinkButtonProps
{
    target: string;
    size?: number;
    children: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({target, size = 3, children}: LinkButtonProps) =>
{
    return (
        <Link to={target} className="button" style={{fontSize: `${size}`}}>{children}</Link>
    )
}

export default LinkButton;