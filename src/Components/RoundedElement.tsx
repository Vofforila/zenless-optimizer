import React, {CSSProperties} from "react";

interface RoundedElementProps
{
    backgroundColor: CSSProperties["color"];
    borderRadius: number;
    padding?: CSSProperties["padding"];
    flex?: CSSProperties["flex"];
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    circle?: boolean
    children: React.ReactNode;
}

export default function RoundedElement(
    {
        backgroundColor,
        borderRadius = 0,
        padding = "10px 20px",
        flex,
        width,
        height,
        circle = false,
        children
    }: RoundedElementProps)
{
    const style: CSSProperties = {
        display: "inline-block",
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        textAlign: "center",
        alignContent: "center",
        cursor: "default",
        userSelect: "text",
        transition: "background-color 0.3s",
        width: circle ? borderRadius : width,
        height: circle ? borderRadius : height,
        padding: circle ? "8px" : padding,
        flex: flex
    }
    return (
        <span style={style}>{children}</span>
    )
}

