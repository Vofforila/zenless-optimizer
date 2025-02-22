import {ImageImport} from '../Utilities';
import {ImageName} from "../Utilities/ImageImport.ts";
import React, {CSSProperties} from "react";

interface CustomImageProps
{
    width: number;
    height: number;
    imgName: ImageName;
    borderRadius?: number;
    boxShadow?: [number, number, number, React.CSSProperties["color"]]
}

const Img: React.FC<CustomImageProps> =
    ({
         width = 100,
         height = 100,
         imgName,
         borderRadius = 0,
         boxShadow = [0, 0, 0, "white"]
     }: CustomImageProps) =>
    {
        const style: CSSProperties =
            {
                width: `${width}`,
                height: `${height}`,
                borderRadius: `${borderRadius}`,
                boxShadow: `${boxShadow[0]}px ${boxShadow[1]}px ${boxShadow[2]}px ${boxShadow[3]}`,
            };

        return (
            <img
                style={style}
                width={`${width}`}
                height={`${height}`}
                src={ImageImport[imgName]}
                alt={imgName}
            />
        );
    }

export default Img;