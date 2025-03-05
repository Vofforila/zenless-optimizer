import React, {CSSProperties} from "react";
import {Theme} from "../Theme/Theme.tsx";

type TextAreaProps =
    {
        width: CSSProperties["width"],
        height: CSSProperties["height"],
        backgroundColor: CSSProperties["backgroundColor"],
        fontSize?: "small" | "medium" | "big" | "header" | "title",
        value: string,
        onChange: (value: string) => void,
        resize?: CSSProperties["resize"],
    }
export default function TextArea(
    {
        width = "300px",
        height = "100px",
        backgroundColor,
        fontSize = "small",
        resize = "none",
        value,
        onChange
    }: TextAreaProps
)
{
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    {
        onChange(event.target.value);
    };
    const style = {
        width: width,
        height: height,
        fontSize: fontSize,
        backgroundColor: backgroundColor,
        resize: resize,
        color: Theme.text_color,
        outline: "none"
    }
    return (
        <textarea onChange={handleChange} value={value} style={style}></textarea>
    )
}

