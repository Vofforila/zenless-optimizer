import {CSSProperties} from "react";
import {Theme} from "../Theme/Theme";

type CustomButtonProps =
    {
        onPress?: () => void;
        size?: number;
        color?: CSSProperties["color"];
        backgroundColor?: CSSProperties["backgroundColor"];
        className?: string;
        scalable?: boolean;
        children: string;
    }
export default function Button(
    {
        onPress,
        size = 3,
        color = Theme.function_color,
        backgroundColor = Theme.primary_color_transparent,
        className = "",
        scalable = true,
        children
    }: CustomButtonProps)
{
    const style: CSSProperties = {
        fontSize: (size * 8),
        color: color,
        backgroundColor: backgroundColor
    }
    return (
        <button style={style} className={(scalable ? "scalable-button" : "fixed-button") + " " + className}
                onClick={onPress}>{children}</button>
    )
}
