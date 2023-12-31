interface CoordinateTextProps {
	axialCoordinates?: { q: number; r: number; s: number, coordiateX?: number, coordiateY?: number };
	id: string;
	offsetCoordinates?: { x: number; y: number, coordiateX?: number, coordiateY?: number };
	showAxialCoordinates?: boolean;
	showOffsetCoordinates?: boolean;
	stroke?: string | undefined;
	strokeWidth?: number | string | undefined;
	coordinateFontSize?: number;
}

export type { CoordinateTextProps };
