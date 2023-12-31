interface SVGPointProps {
	x: number;
	y: number;
}

const svgPointsToString = (points: SVGPointProps[]) => {
	return points
		.map((point: SVGPointProps) => {
			console.log(`${point.x}, ${point.y}`)
			return `${point.x}, ${point.y}`;
		})
		.join(" ");
};

export { svgPointsToString };

export type { SVGPointProps };
