import { HexagonProps } from "@/components/Hexagon/HexagonProps";
import { generateAxialGridProps, generateAxialGridReturnProps } from "./mapGenProps";
import { getHexPoints } from "./coordinateGen";
import { svgPointsToString } from "./SVGPoints/SVGPoints";

const getAxialGridProperties = ({
    height,
    totalNumColumns,
    totalNumRows }: {
        height: number,
        totalNumColumns: number,
        totalNumRows: number
    }) => {
    const width = Math.sqrt(3) / 2 * height;

    const originCenter = [width / 2 + width / 4, height / 2 + height / 4];

    const svgAreaHeight = 3 / 4 * height * totalNumRows + height / 4 + height / 2;
    const svgAreaWidth = width * totalNumColumns + width / 2 + width;

    const radius = height / 2;

    const centerX = originCenter[0];
    const centerY = originCenter[1];

    return {
        height,
        width,
        originCenter,
        centerX,
        centerY,
        svgAreaHeight,
        svgAreaWidth,
        radius,
    }
}

const generateAxialGrid = (
    {
        height,
        totalNumColumns,
        totalNumRows,
        showAxialCoordinates,
        showOffsetCoordinates
    }: generateAxialGridProps
): generateAxialGridReturnProps => {
    const hexes: HexagonProps[] = [];
    const gridProperties = getAxialGridProperties({ height, totalNumColumns, totalNumRows });

    for (let r = 0; r < totalNumRows; r++) {
        let q = Math.floor(r / 2) * -1;

        for (let colQ = 0; colQ < totalNumColumns; colQ++) {
            const s = -1 * q - r;
            const id = `${colQ}-${r}`
            const key = `hexagon-${id}`;

            if (colQ === 0)	                                                            // if first hex, set X origin
                gridProperties.centerX = r % 2 === 0
                    ? gridProperties.originCenter[0]                                    //even row
                    : gridProperties.originCenter[0] + 1 / 2 * gridProperties.width; //odd row

            const points = getHexPoints({
                centerX: gridProperties.centerX,
                centerY: gridProperties.centerY,
                radius: gridProperties.radius
            });

            const pointString = svgPointsToString(points)

            const hex: HexagonProps = {
                id,
                key,
                points: pointString,
                center: { x: gridProperties.centerX, y: gridProperties.centerY },
                height,
                fill: "white", //TODO: based on terrain or data
                stroke: "black", //TODO: based on terrain or data
                offsetCoordinates: { x: colQ, y: r },
                axialCoordinates: { q: q, r: r, s: s },
                radius: gridProperties.radius,
                showAxialCoordinates,
                showOffsetCoordinates

                //TODO: terrain
                //TODO: coordiate locs
            };
            hexes.push(hex);

            gridProperties.centerX += gridProperties.width;
            q++;
        }
        gridProperties.centerY += height * (3 / 4);
    }

    return {
        svgAreaHeight: gridProperties.svgAreaHeight,
        svgAreaWidth: gridProperties.svgAreaWidth,
        hexes
    };
}

export { generateAxialGrid }
