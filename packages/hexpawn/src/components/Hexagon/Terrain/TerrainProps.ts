import { HexagonIconKeys } from "./TerrainIconsSvg";

interface TerrainProps {
    fill?: string | undefined;
    fillOpacity?: number | string | undefined;

    stroke?: string | undefined;
    strokeDasharray?: string | number | undefined;
    strokeDashoffset?: string | number | undefined;
    strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
    strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
    strokeMiterlimit?: number | string | undefined;
    strokeOpacity?: number | string | undefined;
    strokeWidth?: number | string | undefined;

    terrainName: HexagonIconKeys,

    key?: string

    x: number;
    y: number;
}

export type { TerrainProps }
