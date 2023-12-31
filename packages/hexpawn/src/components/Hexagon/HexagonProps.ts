import { SVGPointProps } from "@/utils/SVGPoints/SVGPoints";
import { TerrainProps } from "./Terrain/TerrainProps";

interface HexagonProps {
	axialCoordinates: { q: number; r: number; s: number };
	center?: SVGPointProps,
	fill?: string | undefined;
	fillOpacity?: number | string | undefined;
	height?: number
	id: string;
	key?: string;
	name?: string;
	offsetCoordinates: { x: number; y: number };
	points?: string;
	q?: number;
	radius?: number
	s?: number;
	showAxialCoordinates?: boolean;
	showOffsetCoordinates?: boolean;
	showTerrianIcon?: boolean;
	stroke?: string | undefined;
	strokeWidth?: number | string | undefined;
	terrainProps?: TerrainProps;
}

export type { HexagonProps };
