import {ImageImport} from '../Utilities';
import {ImageName} from "../Utilities/ImageImport.ts";
import {CSSProperties} from "react";

type CustomImageProps =
    {
        width?: CSSProperties["width"];
        height?: CSSProperties["height"];
        imgName: ImageName;
        className?: string;
    }
export default function Img(
    {
        width, height, imgName, className
    }: CustomImageProps
)
{
    const style: CSSProperties = {
        width: width,
        height: height
    }
    return (
        <img
            className={className}
            style={style}
            src={ImageImport[imgName]}
            alt={imgName}
        />
    );
}
