import React, {CSSProperties} from "react";

interface TextProps
{
    size?: "small" | "medium" | "big" | "header" | "title"
    weight?: "smallweight" | "mediumweight" | "bigweight"
    width?: number
    height?: number
    textAlign?: React.CSSProperties["textAlign"];
    padding?: [number, number, number, number]
    borderRadius?: number
    boxShadow?: [number | string, number, number, React.CSSProperties["color"]]
    children: React.ReactNode
}

const TextTag: React.FC<TextProps> =
    ({
         size = "medium",
         weight = "mediumweight",
         width,
         height,
         textAlign,
         padding = [0, 0, 0, 0],
         borderRadius,
         boxShadow = [0, 0, 0, "white"],
         children
     }: TextProps) =>
    {
        const className = size + " " + weight;
        const style: CSSProperties = {
            width: width,
            height: height,
            textAlign: textAlign,
            padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
            boxShadow: `${boxShadow[0]}px ${boxShadow[1]}px ${boxShadow[2]}px ${boxShadow[3]}`,
            borderRadius: borderRadius
        }
        return (
            <p className={className} style={style}>{children}</p>
        )
    }

export default TextTag; 