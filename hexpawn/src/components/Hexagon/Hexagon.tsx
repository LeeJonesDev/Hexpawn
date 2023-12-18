import { HexagonIcons } from "./HexagonIcons";
import { HexagonProps } from "./HexagonProps";

const Hexagon = function ({
    ...props
}: HexagonProps) {
    console.log({ ...props });

    let HexagonIcon
    if (props.terrainName) {
        HexagonIcon = HexagonIcons[props.terrainName];
    }

    return (
        <Hexagon
            {...props}
            iconSvg={HexagonIcon}

        />
    );
}

export default Hexagon;

