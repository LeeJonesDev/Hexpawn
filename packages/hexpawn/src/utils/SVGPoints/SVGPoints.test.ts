import { expect, test } from 'vitest'
import { svgPointsToString } from './SVGPoints';

test('returns valid string format', () => {
    const points = [
        { x: 50, y: 3 },
        { x: 100, y: 28 },
        { x: 100, y: 75 },
        { x: 50, y: 100 },
        { x: 3, y: 75 },
        { x: 3, y: 25 }
    ];
    const output = svgPointsToString(points)

    const spaceSplit = output.split(' ')

    //has 6 entries
    expect(spaceSplit.length === 6)

    //each has 2 entries
    spaceSplit.forEach(str => {
        const commaSplit = str.split(',');
        expect(commaSplit.length === 2)
    })
})
