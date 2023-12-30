import { TerrainIconKeys } from "./TerrainIcons";

interface TerrainProps {
    fill?: string | undefined;
    fillOpacity?: number | string | undefined;
    id: string;
    key?: string;
    stroke?: string | undefined;
    strokeOpacity?: number | string | undefined;
    strokeWidth?: number | string | undefined;
    terrainname: TerrainIconKeys,
    transform?: string | undefined;
    x: number;
    y: number;
}

export type { TerrainProps }
