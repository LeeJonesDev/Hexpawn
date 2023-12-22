import { TerrainIcons } from "./Terrain/TerrainIcons";
import { HexagonProps } from "./HexagonProps";
import style from './style.module.css'

const Hexagon = ({
    id,
    terrainProps,
    points,
    offsetCoordinates,
    axialCoordinates,
    fill = 'none',
    stroke = 'black',
    strokeWidth = 2,
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

    const TerrainComponent = terrainProps &&
        TerrainIcons[terrainProps.terrainname]({
            key: `icon-${id}`,
            ...terrainProps,

        })

    const TerrainComponentWrapped = terrainProps &&
        TerrainComponent &&
        <g transform="scale(0.43) translate(50 50)">
            {TerrainComponent}
        </g>

    //TODO: Render terain coorectly
    //TODO: Terrain Props

    //TODO: GET AND RENDER COORDINATES

    return (
        <g>
            {HexagonComponent}

            {TerrainComponentWrapped}

        </g >
    );
}

export default Hexagon;

