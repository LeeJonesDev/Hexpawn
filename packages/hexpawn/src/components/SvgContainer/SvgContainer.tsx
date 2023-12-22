import { SvgContainerProps } from "./SvgContainerProps";

const SVGContainer = ({
    children,
    viewBox,
    ...props
}: SvgContainerProps) => {
    const parsedViewBox = !viewBox || typeof viewBox === 'string'
        ? viewBox
        : viewBox.join(' ');

    return <svg viewBox={parsedViewBox}>
        {children}
    </svg>
}

export default SVGContainer;
