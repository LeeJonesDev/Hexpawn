import { TerrainIcons } from "./Terrain/TerrainIcons";
import { HexagonProps } from "./HexagonProps";

const Hexagon = ({
    id,
    terrainSpecs,
    points,
    offsetCoordinates,
    axialCoordinates,
    fill = 'none',
    stroke = 'black',
    strokeWidth = 2,
    radius,
    ...props
}: HexagonProps) => {

    const parsedPoints: string = points.map(coordinate =>
        coordinate.join(' ').toString()
    ).join(' ').toString();

    const HexagonComponent = <polygon
        key={`hexagon-${id}`}
        x={offsetCoordinates.x}
        y={offsetCoordinates.y}

        q={axialCoordinates.q}
        r={axialCoordinates.r}
        s={axialCoordinates.s}

        points={parsedPoints}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...props}
    />

    const terrainProps = terrainSpecs && {
        fill,
        stroke,
        strokeWidth,
        key: `icon-${id}`,
        x: terrainSpecs.x,
        y: terrainSpecs.y
    }

    //TODO: Render terain coorectly
    //TODO: Terrain Props

    //TODO: GET AND RENDER COORDINATES

    return (
        <g>
            {HexagonComponent}

            {terrainSpecs &&
                TerrainIcons[terrainSpecs.terrainName]({
                    ...terrainProps
                })}
        </g>
    );
}

export default Hexagon;

