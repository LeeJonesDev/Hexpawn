interface CoordinateTextProps {
	axialCoordinates?: { q: number; r: number; s: number };
	id: string;
	offsetCoordinates?: { x: number; y: number };
	showAxialCoordinates?: boolean;
	showOffsetCoordinates?: boolean;
	stroke?: string | undefined;
	strokeWidth?: number | string | undefined;
}

export type { CoordinateTextProps };
