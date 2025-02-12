interface CustomButtonProps
{
    onPress: () => void;
    className: string;
    children: string;
}

const Button: React.FC<CustomButtonProps> = ({onPress, className, children}: CustomButtonProps) =>
{
    return (
        <button className={className} onClick={onPress} name={children}>{children}</button>
    )
}

export default Button