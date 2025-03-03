import {ImageImport} from '../Utilities';
import {ImageName} from "../Utilities/ImageImport.ts";
import React, {CSSProperties} from "react";

interface ICustomImageProps
{
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    imgName: ImageName;
    className?: string;
}

const Img: React.FC<ICustomImageProps> =
    ({
         width, height, imgName, className
     }: ICustomImageProps) =>
    {
        const style: CSSProperties = {
            width: width,
            height: height,
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

export default Img;