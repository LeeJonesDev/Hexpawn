interface CoordinateTextProps {
	axialCoordinates?: {
		q: number;
		r: number;
		s: number;
		coordiateTextX?: number;
		coordiateTextY?: number;
	};
	id: string;
	offsetCoordinates?: {
		x: number;
		y: number;
		coordiateTextX?: number;
		coordiateTextY?: number;
	};
	showAxialCoordinates?: boolean;
	showOffsetCoordinates?: boolean;
	stroke?: string | undefined;
	strokeWidth?: number | string | undefined;
	coordinateFontSize?: number;
}

export type { CoordinateTextProps };
