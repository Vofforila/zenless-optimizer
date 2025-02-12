import React, {CSSProperties} from "react";

interface TextProps
{
    size?: "small" | "medium" | "big" | "header" | "title"
    weight?: "smallweight" | "mediumweight" | "bigweight"
    width?: number
    height?: number
    children: React.ReactNode
}

const TextTag: React.FC<TextProps> = ({size = "medium", weight = "mediumweight", width, height, children}: TextProps) =>
{
    const className = size + " " + weight;
    const style: CSSProperties = {
        width: width,
        height: height,
    }
    return (
        <p className={className} style={style}>{children}</p>
    )
}

export default TextTag; 