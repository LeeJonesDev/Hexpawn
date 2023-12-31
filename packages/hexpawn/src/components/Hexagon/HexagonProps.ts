import { TerrainProps } from "./Terrain/TerrainProps";

interface HexagonProps {
	axialCoordinates: { q: number; r: number; s: number };
	fill?: string | undefined;
	fillOpacity?: number | string | undefined;
	id: string;
	key?: string;
	name?: string;
	offsetCoordinates: { x: number; y: number };
	points?: string;
	q?: number;
	r?: number;
	s?: number;
	showAxialCoordinates?: boolean;
	showOffsetCoordinates?: boolean;
	showTerrianIcon?: boolean;
	stroke?: string | undefined;
	strokeWidth?: number | string | undefined;
	terrainProps?: TerrainProps;
	visibility?: number | string | undefined;
	x?: number;
	y?: number;
}

export type { HexagonProps };
