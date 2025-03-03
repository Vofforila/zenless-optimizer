import {Link} from "react-router-dom";
import React, {CSSProperties} from "react";

interface ILinkButtonProps
{
    target: string;
    size?: number;
    classname?: string;
    children: string;
}

const LinkButton: React.FC<ILinkButtonProps> =
    ({
         target,
         size = 3,
         classname = "",
         children
     }: ILinkButtonProps) =>
    {
        const style: CSSProperties = {
            fontSize: `${size * 8}px`,
        }
        return (
            <Link to={target} className={"button".concat(classname)} style={style}>{children}</Link>
        )
    }

export default LinkButton;