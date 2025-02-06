interface TextProps
{
    size?: "small" | "medium" | "big" | "header" | "title"
    children: React.ReactNode
}

const TextTag: React.FC<TextProps> = ({size,children}:TextProps) =>
{
    //String fontsize;

    //switch (size) {

    //    case: small
    //        fontsize = "8px"
    //        break;
    //    case: medium
    //        fontsize = "16px"
    //    case: big
    //        fontsize = "24px"
    //    case: header
    //        fontsize = "32px"
    //    case: title
    //        fontsize = "40px"
    //}

    return (
        <p className={size}>{children}</p>
    )
}

export default TextTag; 