import React, {CSSProperties} from "react";

interface IRoundedElementProps
{
    backgroundColor: CSSProperties["color"];
    borderRadius: number;
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    flex?: CSSProperties["flex"];
    children: React.ReactNode;
}


export default function RoundedElement(RoundedElementProps: IRoundedElementProps)
{

    const style: CSSProperties = {
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: RoundedElementProps.backgroundColor,
        borderRadius: RoundedElementProps.borderRadius,
        textAlign: "center",
        cursor: "default",
        userSelect: "none",
        transition: "background-color 0.3s",
        flex: RoundedElementProps.flex,
    }

    return (
        <span style={style}>{RoundedElementProps.children}</span>
    )
}

