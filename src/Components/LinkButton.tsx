import {Link} from "react-router-dom";
import React, {CSSProperties} from "react";

interface ILinkButtonProps
{
    target: string;
    size?: number;
    scalable?: boolean;
    className?: string;
    children: string;
}

const LinkButton: React.FC<ILinkButtonProps> =
    ({
         target,
         size = 3,
        scalable = true,
        className = "",
         children
     }: ILinkButtonProps) =>
    {
        const style: CSSProperties = {
            fontSize: `${size * 8}px`,
        }

        return (
            <Link to={target}  className={ (scalable ? "scalable-button" : "fixed-button")+ className} style={style}>{children}</Link>
        )
    }

export default LinkButton;