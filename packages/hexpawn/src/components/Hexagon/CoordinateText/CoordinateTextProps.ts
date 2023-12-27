interface CoordinateTextProps {
    id: string;

    stroke?: string | undefined;
    strokeWidth?: number | string | undefined;

    offsetCoordinates?: { x: number, y: number },
    axialCoordinates?: { q: number, r: number, s: number },
    showOffsetCoordinates?: boolean,
    showAxialCoordinates?: boolean,
}

export type {
    CoordinateTextProps
}
