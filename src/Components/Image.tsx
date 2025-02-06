import { imageMap, ImageName } from '../Utilities/ImageImport';

interface CustomImageProps
{
    width?: number;
    height?: number;
    imgName: ImageName;
}

const  Image:React.FC<CustomImageProps> =({
    width = 3,
    height = 3,
    imgName
}: CustomImageProps) =>
{
    const getSize = (size: number) =>
    {
        return typeof size === 'number' ? `${size * 8}px` : size;
    };
    return (
        <img
            width={getSize(width)}
            height={getSize(height)}
            src={imageMap[imgName]}
            alt={imgName}
        />
    );
}

export default Image;