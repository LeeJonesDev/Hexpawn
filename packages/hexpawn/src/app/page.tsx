import { TerrainIconKeys } from "@/components/Hexagon/Terrain/TerrainIcons";
import Hexagon from "../components/Hexagon/Hexagon";
import SVGContainer from "@/components/SvgContainer/SvgContainer";
import { SVGPointsToString } from "./utils/SVGPoints";

export default function Home() {

  var points = [
    { x: 50, y: 3 },
    { x: 100, y: 28 },
    { x: 100, y: 75 },
    { x: 50, y: 100 },
    { x: 3, y: 75 },
    { x: 3, y: 25 }
  ];

  return (
    <>
      <SVGContainer>
        <Hexagon
          id={"1-1"}
          points={SVGPointsToString(points)}
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
