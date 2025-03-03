import React from "react";

interface ICustomButtonProps
{
    onPress: () => void;
    className?: string;
    children: string;
}

const Button: React.FC<ICustomButtonProps> = ({onPress, className = "", children}: ICustomButtonProps) =>
{
    return (
        <button className={className} onClick={onPress}>{children}</button>
    )
}

export default Button