import { CoordinateTextProps } from "./CoordinateTextProps"

const CoordinateText = ({ text, ...props }: CoordinateTextProps) => {
    return <svg
        {...props}>
        {text}
    </svg>
}

export default CoordinateText
