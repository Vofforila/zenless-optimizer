import React, {CSSProperties} from 'react';
import {ImageName} from "../Utilities/ImageImport.ts";
import {ImageImport} from "../Utilities";

interface DivProps
{
    id?: string
    flexDirection: React.CSSProperties["flexDirection"];
    justifyContent: React.CSSProperties["justifyContent"];
    alignItems: React.CSSProperties["alignItems"];
    flexWrap: React.CSSProperties["flexWrap"];
    flex?: [React.CSSProperties["flexGrow"], React.CSSProperties["flexShrink"], React.CSSProperties["flexBasis"]];
    alignContent: React.CSSProperties["alignItems"];
    alignSelf?: React.CSSProperties["alignSelf"];
    backgroundColor?: React.CSSProperties["backgroundColor"];
    backgroundImage?: ImageName
    border?: [number, React.CSSProperties["borderStyle"], React.CSSProperties["color"]];
    borderRadius?: number;
    box_shadow?: [number, number, number, React.CSSProperties["color"]]
    gap?: number;
    minWidth?: React.CSSProperties["minWidth"];
    maxWidth?: React.CSSProperties["maxWidth"];
    width?: React.CSSProperties["width"];
    minHeight?: React.CSSProperties["minHeight"];
    maxHeight?: React.CSSProperties["maxHeight"]
    height?: React.CSSProperties["height"];
    padding?: [number, number, number, number]
    children: React.ReactNode
}

const Div: React.FC<DivProps> =
    ({
         id,
         flexDirection,
         justifyContent,
         alignItems,
         flexWrap,
         flex = [1, 1, 0],
         alignContent,
         alignSelf,
         backgroundImage = "",
         border = ["0px", "solid", ""],
         borderRadius = 0,
         box_shadow = [0, 0, 0, "white"],
         backgroundColor,
         gap = 0,
         minWidth,
         maxWidth,
         width,
         minHeight,
         maxHeight,
         height,
         padding = [0, 0, 0, 0],
         children,
     }) =>
    {
        const style: CSSProperties =
            {
                display: 'flex',
                flexDirection: flexDirection,
                justifyContent: justifyContent,
                alignItems: alignItems,
                flexWrap: flexWrap,
                flex: `${flex[0]} ${flex[1]} ${flex[2]}`,
                alignContent: alignContent,
                alignSelf: alignSelf,
                background: ImageImport[backgroundImage],
                backgroundColor: backgroundColor,
                border: `${border[0]}px ${border[1]} ${border[2]}`,
                borderRadius: `${borderRadius}px`,
                boxShadow: `${box_shadow[0]}px ${box_shadow[1]}px ${box_shadow[2]}px ${box_shadow[3]}`,
                gap: `${gap * 8}px`,
                maxWidth: maxWidth,
                minWidth: minWidth,
                width: width,
                maxHeight: maxHeight,
                minHeight: minHeight,
                height: height,
                padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`
            };

        return <div id={id} style={style}>{children} </div>;
    };

export default Div;
