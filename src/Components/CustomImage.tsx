interface CustomImageProps
{
    width: string;
    height: string;
    imgName: string;
}

export default function CustomImage({ width = "16px", height = "16px", imgName = "square" }: CustomImageProps)
{
    return (
        <img width={width} height={height} src={imgName} alt={imgName}></img>
    )
}