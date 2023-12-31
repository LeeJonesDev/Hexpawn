import { SVGPointProps } from "../SVGPoints/SVGPoints";
import { getHexPointProps, getHexPointsProps } from "./getHexPointsProps";

function getHexPoint({ index, radius, centerX, centerY }: getHexPointProps) {
	const angleDegrees = 60 * index - 30;
	const angleRadians = (Math.PI / 180) * angleDegrees;

	const x = centerX + radius * Math.cos(angleRadians);
	const y = centerY + radius * Math.sin(angleRadians);
	return {
		x: Math.round(x),
		y: Math.round(y),
	};
}

const getHexPoints = ({ centerX, centerY, radius }: getHexPointsProps) => {
	const points: SVGPointProps[] = [];

	for (let index = 0; index < 6; index++) {
		const point = getHexPoint({ index, radius, centerX, centerY });

		points.push(point);
	}

	return points;
};

export { getHexPoints };
