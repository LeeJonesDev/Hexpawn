import { CoordinateTextProps } from "./CoordinateTextProps"

const CoordinateText = ({ text, ...props }: CoordinateTextProps) => {
    const CoordiateText = new SVGTextElement()

    return <svg
        {...props}>
        {text}
    </svg>
}
