import React, {CSSProperties} from "react";
import { Theme } from "../Theme/Theme";

interface ICustomButtonProps
{
    onPress?: () => void;
    size?: number;
    color?:CSSProperties["color"];
    backgroundColor?:CSSProperties["backgroundColor"];
    className?: string;
    scalable?: boolean;
    children: string;
}

const Button: React.FC<ICustomButtonProps> = ({onPress,size = 3, color = Theme.function_color,backgroundColor = Theme.primary_color_transparent, className = "",scalable = true, children}: ICustomButtonProps) =>
{

    const style: CSSProperties = {
        fontSize: (size * 8),
        color: color,
        backgroundColor: backgroundColor,
    }


    return (
        <button style={style}  className={ (scalable ? "scalable-button" : "fixed-button")+ className} onClick={onPress}>{children}</button>
    )
}

export default Button