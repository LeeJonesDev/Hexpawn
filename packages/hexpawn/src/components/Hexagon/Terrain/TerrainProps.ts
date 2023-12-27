import { TerrainIconKeys } from "./TerrainIcons";

interface TerrainProps {
    fill?: string | undefined;
    fillOpacity?: number | string | undefined;

    stroke?: string | undefined;
    strokeOpacity?: number | string | undefined;
    strokeWidth?: number | string | undefined;

    terrainname: TerrainIconKeys,

    key?: string

    x: number;
    y: number;

    transform?: string | undefined;

    //TODO: prune props
    //TODO: sort props on save
}

export type { TerrainProps }
