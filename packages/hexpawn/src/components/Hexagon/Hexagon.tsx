import { HexagonProps } from "./HexagonProps";

const Hexagon = ({
    terrainSpecs,
    points,
    offsetCoordinates,
    axialCoordinates,
    fill = 'none',
    stroke = 'black',
    strokeWidth = 2,
    ...props
}: HexagonProps) => {

    //TODO: GET AND RENDER COORDINATES

    const parsedPoints: string = points.map(coordinate =>
        coordinate.join(' ').toString()
    ).join(' ').toString();

    return (
        <polygon
            x={offsetCoordinates.x}
            y={offsetCoordinates.y}

            q={axialCoordinates.q}
            r={axialCoordinates.r}
            s={axialCoordinates.s}

            points={parsedPoints}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            {...props} >
            {/* {terrainSpecs &&
                HexagonIcons[terrainSpecs.terrainName]} */}
        </polygon>
    );
}

export default Hexagon;

