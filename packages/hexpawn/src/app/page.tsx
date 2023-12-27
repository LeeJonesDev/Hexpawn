import { TerrainIconKeys } from "@/components/Hexagon/Terrain/TerrainIcons";
import Hexagon from "../components/Hexagon/Hexagon";
import SVGContainer from "@/components/SvgContainer/SvgContainer";

export default function Home() {
  return (
    <>
      <SVGContainer>
        <Hexagon
          id={"1-1"}
          points={[[50, 3], [100, 28], [100, 75], [50, 100], [3, 75], [3, 25]]}

          terrainProps={{
            terrainname: TerrainIconKeys.desert,
            x: 0,
            y: 0,
            stroke: 'black',
            strokeWidth: 2,
            fill: 'none'
          }}
          showTerrianIcon={true}

          offsetCoordinates={{
            x: 0,
            y: 0
          }}
          showOffsetCoordinates={true}

          axialCoordinates={{
            q: 0,
            r: 0,
            s: 0
          }}
          showAxialCoordinates={true}
        />
      </SVGContainer>
    </>
  )
}
