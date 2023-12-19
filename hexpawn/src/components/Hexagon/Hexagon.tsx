import { HexagonIcons } from "./HexagonIcons";
import { HexagonProps } from "./HexagonProps";

const Hexagon = ({
    terrainIconSpecs,
    points,
    offsetCoordinates,
    ...props
}: HexagonProps) => {
    console.log({ ...props });

    let HexagonIcon = undefined
    if (terrainIconSpecs?.terrainName) {
        HexagonIcon = HexagonIcons[terrainIconSpecs.terrainName];
    }

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
            {HexagonIcon}
        </svg>
    );
}

export default Hexagon;

