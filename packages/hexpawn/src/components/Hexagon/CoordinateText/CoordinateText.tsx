import { CoordinateTextProps } from "./CoordinateTextProps"

const CoordinateText = ({
    id,
    stroke,
    strokeWidth,
    offsetCoordinates,
    showOffsetCoordinates,
    axialCoordinates,
    showAxialCoordinates,
    ...props }: CoordinateTextProps) => {
    const offsetCoordianteText = showOffsetCoordinates && <text {...{
        key: `offset-coords-${id}`,
        stroke,
        strokeWidth,
        x: '12%',
        y: '17%',
        ...props
    }}>
        {offsetCoordinates?.x}, {offsetCoordinates?.y}
    </text>

    const axialCoordinatText = showAxialCoordinates &&
        <text {...{
            key: `axial-coords-${id}`,
            stroke,
            strokeWidth,
            x: '10%',
            y: '55%',
            ...props
        }}>
            {axialCoordinates?.q}, {axialCoordinates?.r}, {axialCoordinates?.s}
        </text>

    return <>
        {axialCoordinatText}

        {offsetCoordianteText}
    </>
}

export default CoordinateText
