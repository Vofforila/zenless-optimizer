import React, {CSSProperties} from 'react';
import {ImageName} from "../Utilities/ImageImport.ts";
import {ImageImport} from "../Utilities";

interface DivProps
{
    id?: string
    flex_direction: React.CSSProperties["flexDirection"];
    justify_content: React.CSSProperties["justifyContent"];
    align_items: React.CSSProperties["alignItems"];
    flex_wrap: React.CSSProperties["flexWrap"];
    flex?: [React.CSSProperties["flexGrow"], React.CSSProperties["flexShrink"], React.CSSProperties["flexBasis"]];
    align_content?: React.CSSProperties["alignItems"];
    align_self?: React.CSSProperties["alignSelf"];
    background_color?: React.CSSProperties["backgroundColor"];
    background_image?: ImageName
    border?: [number, React.CSSProperties["borderStyle"], React.CSSProperties["color"]];
    border_radius?: number;
    gap?: number;
    min_width?: React.CSSProperties["minWidth"];
    max_width?: React.CSSProperties["maxWidth"];
    width?: React.CSSProperties["width"];
    min_height?: React.CSSProperties["minHeight"];
    max_height?: React.CSSProperties["maxHeight"]
    height?: React.CSSProperties["height"];
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
         flex = [1, 1, "auto"],
         align_content,
         align_self,
         background_image = "",
         border = ["0px", "solid", ""],
         border_radius = 0,
         background_color,
         gap = 0,
         min_width,
         max_width,
         width,
         min_height,
         max_height,
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
                flex: flex,
                alignContent: align_content,
                alignSelf: align_self,
                background: ImageImport[background_image],
                backgroundColor: background_color,
                border: `${border[0]}px ${border[1]} ${border[2]}`,
                borderRadius: `${border_radius}px`,
                gap: `${gap * 8}px`,
                maxWidth: max_width,
                minWidth: min_width,
                width: width,
                maxHeight: max_height,
                minHeight: min_height,
                height: height,
                padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`
            };

        return <div id={id} style={style}>{children} </div>;
    };

export default Div;
