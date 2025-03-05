import React, {CSSProperties, useRef} from "react";
import {Theme} from "../Theme/Theme";

type InputFileProps = {
    size?: number;
    color?: CSSProperties["color"];
    backgroundColor?: CSSProperties["backgroundColor"];
    className?: string;
    scalable?: boolean;
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
};
export default function InputFile(
    {
        size = 3,
        color = Theme.function_color,
        backgroundColor = Theme.primary_color_transparent,
        className = "",
        scalable = true,
        onClick,
        children
    }: InputFileProps)
{
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleButtonClick = () =>
    {
        if (fileInputRef.current)
        {
            fileInputRef.current.click();
        }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        if (onClick)
        {
            onClick(event);
        }
    };
    const style: CSSProperties = {
        fontSize: size * 8,
        color: color,
        backgroundColor: backgroundColor,
        cursor: "pointer"
    };
    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                style={{display: "none"}}
                onChange={handleFileChange}
            />
            <button
                onClick={handleButtonClick}
                style={style}
                className={(scalable ? "scalable-button" : "fixed-button") + " " + className}
            >
                {children}
            </button>
        </div>
    );
}