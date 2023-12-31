import Hexagon from "@/components/Hexagon/Hexagon";
import { TerrainIconKeys } from "@/components/Hexagon/Terrain/TerrainIcons";
import SVGContainer from "@/components/SvgContainer/SvgContainer";
import { svgPointsToString } from "@/utils/SVGPoints/SVGPoints";
import { generateAxialGrid } from "@/utils/mapGen";

export default function Home() {
	const points = [
		{ x: 50, y: 3 },
		{ x: 100, y: 28 },
		{ x: 100, y: 75 },
		{ x: 50, y: 100 },
		{ x: 3, y: 75 },
		{ x: 3, y: 25 },
	];

	const axialGrid = generateAxialGrid({
		height: 50,
		totalNumColumns: 50,
		totalNumRows: 50,
		showAxialCoordinates: true,
		showOffsetCoordinates: true
	})

	let hexes = []
	for (const hex of axialGrid.hexes) {
		hexes.push(< Hexagon key={hex.key} {...hex} />)
	}

	return (
		<>
			<SVGContainer {...axialGrid}>
				{hexes}
			</SVGContainer>

			<SVGContainer>
				<Hexagon
					id={"1-1"}
					points={svgPointsToString(points)}
					terrainProps={{
						terrainname: TerrainIconKeys.desert,
						x: 0,
						y: 0,
						stroke: "black",
						strokeWidth: 2,
						fill: "none",
						id: "terrain1-1",
					}}
					showTerrianIcon={true}
					offsetCoordinates={{
						x: 0,
						y: 0,
					}}
					showOffsetCoordinates={true}
					axialCoordinates={{
						q: 0,
						r: 0,
						s: 0,
					}}
					showAxialCoordinates={true}
				/>
			</SVGContainer>
		</>
	);
}
