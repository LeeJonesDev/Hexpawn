import { TerrainIconKeys } from "./Terrain/TerrainIcons";
import { TerrainProps } from "./Terrain/TerrainProps";

interface HexagonProps {
    id: string,
    name?: string,
    key?: string

    terrainProps?: TerrainProps,
    showTerrianIcon?: boolean,

    //x, y coords of each point of the svg
    points: [
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number],
        [number, number]
    ],


    fill?: string | undefined;
    fillOpacity?: number | string | undefined;

    fontFamily?: string | undefined;
    fontSize?: number | string | undefined;
    fontSizeAdjust?: number | string | undefined;
    fontStretch?: number | string | undefined;
    fontStyle?: number | string | undefined;
    fontVariant?: number | string | undefined;
    fontWeight?: number | string | undefined;

    mask?: string | undefined;
    maskContentUnits?: number | string | undefined;
    maskUnits?: number | string | undefined;

    stroke?: string | undefined;
    strokeDasharray?: string | number | undefined;
    strokeDashoffset?: string | number | undefined;
    strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
    strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
    strokeMiterlimit?: number | string | undefined;
    strokeOpacity?: number | string | undefined;
    strokeWidth?: number | string | undefined;


    targetX?: number | string | undefined;
    targetY?: number | string | undefined;


    textAnchor?: string | undefined;
    textDecoration?: number | string | undefined;
    textLength?: number | string | undefined;
    textRendering?: number | string | undefined;
    visibility?: number | string | undefined;

    suppressHydrationWarning?: boolean | undefined;

    //coordinateFontSize: number,


    offsetCoordinates: { x: number, y: number },
    axialCoordinates: { q: number, r: number, s: number },
    showOffsetCoordinates?: boolean,
    showAxialCoordinates?: boolean,

    q?: number
    r?: number
    s?: number

    // isHideAxialCoordinates: boolean,
    // isHideOffSetCoordinates: boolean,



    // coordTextCoordinates?: {
    //     x: number,
    //     y: number,
    //     qx: number,
    //     qy: number,
    //     rx: number,
    //     ry: number,
    //     sx: number,
    //     sy: number,
    //     qq: number,
    //     rr: number,
    //     ss: number,
    // },

    //TODO: prune props
    //TODO:sort props on save
}

export type {
    HexagonProps
}
