import {ImageImport} from '../Utilities';
import {ImageName} from "../Types";
import React from "react";

interface CustomImageProps
{
    width: number;
    height: number;
    imgName: ImageName;
}

const Img: React.FC<CustomImageProps> = ({width = 3, height = 3, imgName}: CustomImageProps) =>
{
    return (
        <img
            width={`${width * 8}`}
            height={`${height * 8}`}
            src={ImageImport[imgName]}
            alt={imgName}
        />
    );
}

export default Img;