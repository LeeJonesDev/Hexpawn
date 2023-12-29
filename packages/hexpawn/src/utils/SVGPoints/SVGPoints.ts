interface SVGPointProps {
    x: number,
    y: number
}


const svgPointsToString = (points: SVGPointProps[]) => {
    return points.map((point: SVGPointProps) => {
        return `${point.x}, ${point.y}`
    }
    ).join(' ');

}

export {
    svgPointsToString
}

export type {
    SVGPointProps
}

