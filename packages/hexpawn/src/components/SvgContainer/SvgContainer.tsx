import { SvgContainerProps } from "./SvgContainerProps";

const SVGContainer = ({
    children,
    ...props
}: SvgContainerProps) => {
    return <svg>
        <g>
            {children}
        </g>
    </svg>

}


export default SVGContainer;
