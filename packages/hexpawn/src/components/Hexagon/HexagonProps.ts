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

    stroke?: string | undefined;
    strokeWidth?: number | string | undefined;
    visibility?: number | string | undefined;

    offsetCoordinates: { x: number, y: number },
    axialCoordinates: { q: number, r: number, s: number },
    showOffsetCoordinates?: boolean,
    showAxialCoordinates?: boolean,

    q?: number
    r?: number
    s?: number

    //TODO: prune props
    //TODO:sort props on save
}

export type {
    HexagonProps
}
