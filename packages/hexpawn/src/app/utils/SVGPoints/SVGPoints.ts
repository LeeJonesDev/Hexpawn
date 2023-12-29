interface SVGPointProps {
    x: number,
    y: number
}


const SVGPointsToString = (points: SVGPointProps[]) => {
    return points.map((point: SVGPointProps) => {
        return `${point.x}, ${point.y}`
    }
    ).join(' ');

}

export {
    SVGPointsToString
}

export type {
    SVGPointProps
}

