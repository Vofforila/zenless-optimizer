import {Link} from "react-router-dom";
import {CSSProperties} from "react";

type LinkButtonProps =
    {
        target: string;
        size?: number;
        scalable?: boolean;
        className?: string;
        children: string;
    }
export default function LinkButton(
    {
        target,
        size = 3,
        scalable = true,
        className = "",
        children
    }: LinkButtonProps)
{
    const style: CSSProperties = {
        fontSize: `${size * 8}px`
    }
    return (
        <Link to={target} className={(scalable ? "scalable-button" : "fixed-button") + className}
              style={style}>{children}</Link>
    )
}
