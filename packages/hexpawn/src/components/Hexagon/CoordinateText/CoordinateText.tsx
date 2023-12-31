import { CoordinateTextProps } from "./CoordinateTextProps";
import style from "./style.module.css";

const CoordinateText = ({
	id,
	stroke,
	strokeWidth,
	offsetCoordinates,
	showOffsetCoordinates,
	axialCoordinates,
	showAxialCoordinates,
	coordinateFontSize,
	...props
}: CoordinateTextProps) => {
	const offsetCoordianteText = showOffsetCoordinates && (
		<text
			className={style.text}
			key={`offset-coords-${id}`}
			{...{
				stroke,
				strokeWidth,
				x: offsetCoordinates?.coordiateX,
				y: offsetCoordinates?.coordiateY,
				fontSize: coordinateFontSize,
				...props,
			}}
		>
			{offsetCoordinates?.x}, {offsetCoordinates?.y}
		</text>
	);

	const axialCoordinatText = showAxialCoordinates && (
		<text
			className={style.text}
			key={`axial-coords-${id}`}
			{...{
				stroke,
				strokeWidth,
				x: axialCoordinates?.coordiateX,
				y: axialCoordinates?.coordiateY,
				fontSize: coordinateFontSize,
				...props,
			}}
		>
			{axialCoordinates?.q}, {axialCoordinates?.r}, {axialCoordinates?.s}
		</text>
	);

	return (
		<>
			{axialCoordinatText}

			{offsetCoordianteText}
		</>
	);
};

export default CoordinateText;
