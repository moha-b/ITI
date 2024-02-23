const {capitalizeTextFirstChar, createArray, random} =require('../lab1.js')

describe('capitalizeTextFirstChar function', () => {

    it('should return a string', () => {
        const result = capitalizeTextFirstChar("i'm ahmed ali");
        expect(typeof result).toBe('string');
    });

    it('should capitalize the first character of each word in the string', () => {
        const result = capitalizeTextFirstChar("i'm mohab khalid");
        expect(result).toBe("I'm Mohab Khalid");
    });

    it('should handle a single-word string correctly', () => {
        const result = capitalizeTextFirstChar('hello');
        expect(result).toBe('Hello');
    });

});


describe('createArray function', () => {

    it('should return an array', () => {
        const result = createArray(3);
        expect(Array.isArray(result)).toBe(true);
    });

    it('should return an array of the specified length and include the last element', () => {
        const length = 5;
        const result = createArray(length);
        expect(result.length).toBe(length);
        expect(result).toContain(length - 1);
    });

    it('should return an array of the specified length and exclude the last element', () => {
        const length = 3;
        const result = createArray(length);
        expect(result.length).toBe(length);
        expect(result).not.toContain(length);
    });
});

describe('random function', () => {

    it('should return a number', () => {
        const result = random(1000, 9000);
        expect(typeof result).toBe('number');
    });

    it('should return a number between the specified range (inclusive)', () => {
        const min = 5000;
        const max = 7000;
        const result = random(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    it('should return NaN if min or max is not provided', () => {
        const resultWithoutMax = random(3000);
        const resultWithoutMin = random(undefined, 5000);

        expect(isNaN(resultWithoutMax)).toBe(true);
        expect(isNaN(resultWithoutMin)).toBe(true);
    });
});