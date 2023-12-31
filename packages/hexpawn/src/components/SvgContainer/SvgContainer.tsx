import { SvgContainerProps } from "./SvgContainerProps";

const SVGContainer = ({
	title,
	children,
	viewBox,
	...props
}: SvgContainerProps) => {
	const parsedViewBox =
		!viewBox || typeof viewBox === "string" ? viewBox : viewBox.join(" ");

	return (
		<svg {...props} viewBox={parsedViewBox}>
			<title>{title ? title : "svg-container"}</title>
			{children}
		</svg>
	);
};

export default SVGContainer;
