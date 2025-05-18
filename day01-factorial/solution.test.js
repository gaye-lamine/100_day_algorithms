const { factorielle,factorielleIterative } = require("./solution");
describe('factorielle', () => {
    test('factorielle(0) retourne 1', () => {
        expect(factorielle(0)).toBe(1);
    });

    test('factorielle(1) retourne 1', () => {
        expect(factorielle(1)).toBe(1);
    });

    test('factorielle(5) retourne 120', () => {
        expect(factorielle(5)).toBe(120);
    });

    test('factorielle(7) retourne 5040', () => {
        expect(factorielle(7)).toBe(5040);
    });

    test('factorielle(-3) retourne "undefined"', () => {
        expect(factorielle(-3)).toBe("undefined");
    });
});
describe('factorielleIterative', () => {
    test('factorielleIterative(0) retourne 1', () => {
        expect(factorielleIterative(0)).toBe(1);
    });

    test('factorielleIterative(1) retourne 1', () => {
        expect(factorielleIterative(1)).toBe(1);
    });

    test('factorielleIterative(5) retourne 120', () => {
        expect(factorielleIterative(5)).toBe(120);
    });

    test('factorielleIterative(7) retourne 5040', () => {
        expect(factorielleIterative(7)).toBe(5040);
    });

    test('factorielleIterative(-3) retourne "undefined"', () => {
        expect(factorielleIterative(-3)).toBe("undefined");
    });
});
