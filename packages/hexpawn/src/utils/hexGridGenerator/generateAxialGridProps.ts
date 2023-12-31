import { HexagonProps } from "@/components/Hexagon/HexagonProps";

interface generateAxialGridReturnProps {
	height: number;
	width: number;
	hexes: HexagonProps[];
}

interface generateAxialGridProps {
	height: number;
	totalNumColumns: number;
	totalNumRows: number;
	showAxialCoordinates: boolean;
	showOffsetCoordinates: boolean;
}

export type { generateAxialGridProps, generateAxialGridReturnProps };
