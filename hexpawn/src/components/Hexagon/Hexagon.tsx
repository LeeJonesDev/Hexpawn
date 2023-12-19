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

    //TODO: GET COORDINATES

    return (
        <svg
            x={offsetCoordinates.x}
            y={offsetCoordinates.y}

            points={points.join(',').toString()}


            {...props}
        >
            {HexagonIcon}
        </svg>
    );
}

export default Hexagon;

