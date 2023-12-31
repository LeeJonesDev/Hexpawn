import CoordinateText from "./CoordinateText/CoordinateText";
import { HexagonProps } from "./HexagonProps";
import { TerrainIcons } from "./Terrain/TerrainIcons";

const Hexagon = ({
	id,
	terrainProps,
	points,
	offsetCoordinates,
	axialCoordinates,
	fill = "none",
	stroke = "black",
	strokeWidth = 2,
	showTerrianIcon = false,
	showOffsetCoordinates = false,
	showAxialCoordinates = false,
	coordinateFontSize,
	...props
}: HexagonProps) => {
	const HexagonComponent = (
		<polygon
			key={`hexagon-${id}`}
			x={offsetCoordinates.x}
			y={offsetCoordinates.y}
			q={axialCoordinates.q}
			r={axialCoordinates.r}
			s={axialCoordinates.s}
			points={points?.toString()}
			fill={fill}
			stroke={stroke}
			strokeWidth={strokeWidth}
			{...props}
		/>
	);

	const TerrainComponent =
		showTerrianIcon &&
		terrainProps &&
		TerrainIcons[terrainProps.terrainname]({
			key: `icon-${id}`,
			...terrainProps,
			x: "25%",
			y: "40%",
		});

	const TerrainComponentWrapped = terrainProps && TerrainComponent && (
		<g transform="scale(0.35)">{TerrainComponent}</g>
	);

	return (
		<g>
			{HexagonComponent}

			{TerrainComponentWrapped}

			<CoordinateText
				{...{
					id,
					offsetCoordinates,
					axialCoordinates,
					fill,
					stroke,
					showOffsetCoordinates,
					showAxialCoordinates,
					coordinateFontSize
				}}
			/>
		</g>
	);
};

export default Hexagon;
