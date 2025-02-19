import React, {CSSProperties} from 'react';
import {ImageName} from "../Utilities/ImageImport.ts";
import {ImageImport} from "../Utilities";

interface DivProps
{
    id?: string
    flex_direction: "row" | "column"
    justify_content:
        "center" | "start" | "end" | "flex-start" | "flex-end"
        | "left" | "right" | "normal" | "space-between" | "space-around"
        | "space-evenly" | "stretch" | "inherit" | "initial"
    align_items:
        "normal" | "stretch" | "center" | "start" | "end" |
        "flex-start" | "flex-end" | "self-start" | "self-end" |
        "baseline" | "first baseline" | "last baseline"
    flex_wrap: "nowrap" | "wrap" | "wrap-reverse"
    align_content?: "normal" | "start" | "center" |
        "end" | "flex-start" | "flex-end" | "baseline" |
        "first baseline" | "last baseline" | "space-between" |
        "space-around" | "space-evenly" | "stretch"
    align_self?: "auto" | "normal" | "center" | "start" | "end" | "self-start" | "self-end" | "flex-start" | "flex-end" | "baseline"
    background_image?: ImageName
    gap?: number
    width?: string
    height?: string
    padding?: [number, number, number, number]
    children: React.ReactNode
}

const Div: React.FC<DivProps> =
    ({
         id,
         flex_direction,
         justify_content,
         align_items,
         flex_wrap,
         align_content,
         align_self,
         background_image = "",
         gap = 0,
         width,
         height,
         padding = [0, 0, 0, 0],
         children,
     }) =>
    {
        const style: CSSProperties =
            {
                display: 'flex',
                flexDirection: flex_direction,
                justifyContent: justify_content,
                alignItems: align_items,
                flexWrap: flex_wrap,
                alignContent: align_content,
                alignSelf: align_self,
                background: ImageImport[background_image],
                gap: `${gap * 8}px`,
                width: width,
                height: height,
                padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`
            };

        return <div id={id} style={style}>{children} </div>;
    };

export default Div;
