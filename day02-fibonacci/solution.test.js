const { fibonacciSeriesIterative,fibonacciSeriesRecursive, fibonacciSeriesDynamic } = require("./solution");

describe('fibonacciSeriesIterative', ()=>{
    test('fibonacciSeriesIterative(0) retourne [0]', () => {
        expect(fibonacciSeriesIterative(0)).toEqual([0]);
    });

    test('fibonacciSeriesIterative(1) retourne [0, 1]', () => {
        expect(fibonacciSeriesIterative(1)).toEqual([0, 1]);
    });

    test('fibonacciSeriesIterative(5) retourne [0, 1, 1, 2, 3, 5]', () => {
        expect(fibonacciSeriesIterative(5)).toEqual([0, 1, 1, 2, 3, 5]);
    });

    test('fibonacciSeriesIterative(7) retourne [0, 1, 1, 2, 3, 5, 8, 13]', () => {
        expect(fibonacciSeriesIterative(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test('fibonacciSeriesIterative(-3) retourne "undefined"', () => {
        expect(fibonacciSeriesIterative(-3)).toBe("n doit être un entier positif");
    });
})
describe('fibonacciSeriesRecursive', ()=>{
    test('fibonacciSeriesRecursive(0) retourne [0]', () => {
        expect(fibonacciSeriesRecursive(0)).toEqual([0]);
    });

    test('fibonacciSeriesRecursive(1) retourne [0, 1]', () => {
        expect(fibonacciSeriesRecursive(1)).toEqual([0, 1]);
    });

    test('fibonacciSeriesRecursive(5) retourne [0, 1, 1, 2, 3, 5]', () => {
        expect(fibonacciSeriesRecursive(5)).toEqual([0, 1, 1, 2, 3, 5]);
    });

    test('fibonacciSeriesRecursive(7) retourne [0, 1, 1, 2, 3, 5, 8, 13]', () => {
        expect(fibonacciSeriesRecursive(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test('fibonacciSeriesRecursive(-3) retourne "undefined"', () => {
        expect(fibonacciSeriesRecursive(-3)).toBe("n doit être un entier positif");
    });
})
describe('fibonacciSeriesDynamic', () => {
    test('fibonacciSeriesDynamic(0) retourne [0]', () => {
        expect(fibonacciSeriesDynamic(0)).toEqual([0]);
    });

    test('fibonacciSeriesDynamic(1) retourne [0, 1]', () => {
        expect(fibonacciSeriesDynamic(1)).toEqual([0, 1]);
    });

    test('fibonacciSeriesDynamic(5) retourne [0, 1, 1, 2, 3, 5]', () => {
        expect(fibonacciSeriesDynamic(5)).toEqual([0, 1, 1, 2, 3, 5]);
    });

    test('fibonacciSeriesDynamic(7) retourne [0, 1, 1, 2, 3, 5, 8, 13]', () => {
        expect(fibonacciSeriesDynamic(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test('fibonacciSeriesDynamic(-3) retourne "undefined"', () => {
        expect(fibonacciSeriesDynamic(-3)).toBe("n doit être un entier positif");
    });
})