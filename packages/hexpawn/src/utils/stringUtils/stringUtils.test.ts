import { expect, test } from 'vitest'
import { camelize } from './stringUtils';

const testString = 'test string-abc 123';

test('is camelcase', () => {
    const test = camelize(testString)

    expect(test).toBe('testStringAbc123')
})

test('is upper camelcase', () => {
    const test = camelize(testString, true)

    expect(test).toBe('TestStringAbc123')
})

test('is empty', () => {

    const test = camelize('', true)

    expect(test).toBe('')
})
