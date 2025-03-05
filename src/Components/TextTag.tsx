import React, {CSSProperties} from "react";

type TextProps =
    {
        size?: "small" | "medium" | "big" | "header" | "title";
        weight?: "smallWeight" | "mediumWeight" | "bigWeight";
        width?: CSSProperties["width"];
        height?: CSSProperties["height"];
        textAlign?: React.CSSProperties["textAlign"];
        borderRadius?: number;
        whiteSpace?: CSSProperties["whiteSpace"];
        className?: string;
        children: React.ReactNode;
    }
export default function TextTag(
    {
        size = "medium",
        weight = "mediumWeight",
        width,
        height,
        textAlign,
        borderRadius,
        whiteSpace,
        className,
        children
    }: TextProps)
{
    const textClassName = size + " " + weight + " " + className;
    const style: CSSProperties = {
        width: width,
        height: height,
        textAlign: textAlign,
        whiteSpace: whiteSpace,
        borderRadius: borderRadius
    }
    return (
        <p className={textClassName} style={style}>{children}</p>
    )
}
