import { TerrainIcons } from "./Terrain/TerrainIcons";
import { HexagonProps } from "./HexagonProps";

const Hexagon = ({
    id,
    terrainProps,
    points,
    offsetCoordinates,
    axialCoordinates,
    fill = 'none',
    stroke = 'black',
    strokeWidth = 2,
    showTerrianIcon = false,
    showOffsetCoordinates = false,
    showAxialCoordinates = false,
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

    const TerrainComponent = showTerrianIcon && terrainProps &&
        TerrainIcons[terrainProps.terrainname]({
            key: `icon-${id}`,
            ...terrainProps,
            x: '25%',
            y: '40%'
        })

    const TerrainComponentWrapped = terrainProps &&
        TerrainComponent &&
        <g transform="scale(0.35)">
            {TerrainComponent}
        </g>

    const offsetCoordinatesText = showOffsetCoordinates &&
        <text {...{
            key: `offset-coords-${id}`,
            fill,
            stroke,
            strokeWidth,
            x: '12%',
            y: '17%'
        }}>
            {offsetCoordinates.x}, {offsetCoordinates.y}
        </text>


    const axialCoordinatesText = showAxialCoordinates &&
        <text {...{
            key: `axial-coords-${id}`,
            fill,
            stroke,
            strokeWidth,
            x: '10%',
            y: '55%'
        }}>
            {axialCoordinates.q}, {axialCoordinates.r}, {axialCoordinates.s}
        </text>


    //TODO: Render terain coorectly
    //TODO: Terrain Props

    return (
        <g>
            {HexagonComponent}

            {TerrainComponentWrapped}

            {offsetCoordinatesText}

            {axialCoordinatesText}
        </g >
    );
}

export default Hexagon;

