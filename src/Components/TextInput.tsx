import React, {CSSProperties} from "react";
import {Theme} from "../Theme/Theme.tsx";

type TextInput =
    {
        fontSize?: "small" | "medium" | "big" | "header" | "title"
        placeholder: string;
        height?: number;
        backgroundColor: CSSProperties["backgroundColor"];
        className?: string;
        value: string;
        onChange: (value: string) => void;
    }
export default function TextInput(
    {
        fontSize = "medium", placeholder, height = 24, backgroundColor, className, value, onChange
    }: TextInput)
{
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        onChange(event.target.value);
    }
    const style: CSSProperties = {
        color: Theme.text_color,
        borderRadius: 8,
        padding: 8,
        boxShadow: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.5), 7px 7px 20px 0 rgba(0, 0, 0, 0.1), 4px 4px 5px 0 rgba(0, 0, 0, 0.1)",
        border: "none",
        width: 96,
        height: height,
        backgroundColor: backgroundColor
    }
    return (
        <input style={style} onChange={handleChange} value={value} placeholder={placeholder} type="input"
               className={fontSize + " " + className}/>
    )
}
