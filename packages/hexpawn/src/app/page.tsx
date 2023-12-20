import { HexagonIconKeys } from "@/components/Hexagon/HexagonIcons";
import Hexagon from "../components/Hexagon/Hexagon";
import SVGContainer from "@/components/SvgContainer/SvgContainer";

export default function Home() {
  return (
    <>
      Hello World!
      <SVGContainer>
        <Hexagon
          id={"1-1"}
          points={[[50, 3], [100, 28], [100, 75], [50, 100], [3, 75], [3, 25]]}
          radius={10}
          terrainSpecs={{
            terrainName: HexagonIconKeys.desert,
            iconSize: 32,
            x: 0,
            y: 0
          }}
          offsetCoordinates={{
            x: 0,
            y: 0
          }}
          axialCoordinates={{
            q: 0,
            r: 0,
            s: 0
          }}
        />
      </SVGContainer>
    </>
  )
}
