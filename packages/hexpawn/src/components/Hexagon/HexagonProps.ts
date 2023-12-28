import { TerrainProps } from "./Terrain/TerrainProps";

interface HexagonProps {
    id: string,
    name?: string,
    key?: string
    terrainProps?: TerrainProps,
    showTerrianIcon?: boolean,
    points?: string;
    fill?: string | undefined;
    fillOpacity?: number | string | undefined;
    stroke?: string | undefined;
    strokeWidth?: number | string | undefined;
    visibility?: number | string | undefined;
    offsetCoordinates: { x: number, y: number },
    axialCoordinates: { q: number, r: number, s: number },
    showOffsetCoordinates?: boolean,
    showAxialCoordinates?: boolean,
    x?: number
    y?: number
    q?: number
    r?: number
    s?: number
}

export type {
    HexagonProps
}
