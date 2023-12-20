import { HexagonIcons } from "./HexagonIcons";
import { HexagonProps } from "./HexagonProps";

const Hexagon = ({
    terrainSpecs,
    points,
    offsetCoordinates,
    ...props
}: HexagonProps) => {
    console.log({ ...props });

    //TODO: GET AND RENDER COORDINATES

    const parsedPoints: string = points.map(coordinate =>
        coordinate.join(' ').toString()
    ).join(' ').toString();

    return (
        <svg
            x={offsetCoordinates.x}
            y={offsetCoordinates.y}

            points={parsedPoints}


            {...props}
        >
            {terrainSpecs &&
                HexagonIcons[terrainSpecs.terrainName]}
        </svg>
    );
}

export default Hexagon;

