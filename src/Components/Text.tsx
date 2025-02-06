interface TextProps
{
    content: string
    size?: "small" | "medium" | "big" | "header" | "title"
}

export default function TextTag({content, size}:TextProps)
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
        <p className={size }>{content}</p>
    )
}