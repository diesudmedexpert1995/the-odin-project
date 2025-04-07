import Calculator from "../samples/calculator.js";
import capitalize from "../samples/capitalize.js";
import reverseString from "../samples/reverseString.js";
import caesarCipher from "../samples/caesar_cypher.js";
import analyzeArray  from "../samples/analyze_array.js";


test("Test capitalize()", () => { 
    const res = capitalize('london is the capital of Great Britain')
    console.log(res)
    const expected = 'London is the capital of Great Britain'
    console.log(expected)
    expect(res).toMatch(expected)
})

test('Test reverse string', () => { 
    const res = reverseString("test string")
    console.log(res)
    const expected = "gnirts tset"
    console.log(expected)
    expect(res).toMatch(expected)
})

test('Calculator test', () => {
    console.log("Initializing calculator...")
    const calculator  = new Calculator()
    const a = 5, b = 7
    console.log("First operator: "+a)
    console.log("Second operator: "+b)
    
    console.log("Testing add() function")
    const resultAdd = calculator.add(a,b)
    const expectRes1 = 12
    expect(resultAdd).toBe(expectRes1)
    
    console.log("Testing substruct() function: ");
    
    const resultSubstruct = calculator.substruct(a,b)
    const expectRes2 = -2
    expect(resultSubstruct).toBe(expectRes2)
    
    console.log("Testing multiply() function: ");
    const resultMultiply = calculator.multiply(a,b)
    const expectRes3 = 35
    expect(resultMultiply).toBe(expectRes3)
    
    console.log("Testing divide() function: ");
    console.log("\t\tTesting with wrong parameters: ")
    expect(Number(calculator.divide(a,0))).toEqual(Infinity)

    console.log("Testing modulo() function: ");
    console.log("\t\tTesting with wrong parameters: ")
    expect(Number(calculator.modulo(a,0))).toEqual(NaN)
    
    console.log("Testing divide() function: ");
    console.log("\t\tTesting with right parameters: ")
    const resultDivide = calculator.divide(a,b)
    const expectRes4 = 0.71
    expect(Number(resultDivide.toPrecision(2))).toBe(expectRes4)
    

    console.log("Testing modulo() function: ");
    console.log("\t\tTesting with right parameters: ")
    const resultModulo = calculator.modulo(b,a)
    const expectRes5 = 2
    expect(Number(resultModulo.toPrecision(2))).toBe(expectRes5)

});

describe('Caesar cypher test', () => {
    
    test('wraps from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });
    
    test('preserves letter case', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });
    
    test('preserves punctuation and case', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
    
    test('handles negative shift', () => {
        expect(caesarCipher('ABC xyz!', -3)).toBe('XYZ uvw!');
    });
    
    test('complex sentence shift', () => {
        expect(caesarCipher('The quick brown fox!', 5)).toBe('Ymj vznhp gwtbs ktc!');
    });
});

describe('Analize array', () => {
    const test1 = [1, 8, 3, 4, 2, 6];
    const test2 = [-1, -8, -3, -4, -2, -6];

    it('should return an object', () => {
        const result = analyzeArray(test1);
        expect(result).toHaveProperty('average');
        expect(result).toHaveProperty('min');
        expect(result).toHaveProperty('max');
        expect(result).toHaveProperty('length');
    })

    it('should calculate the average', () => {
        expect(analyzeArray(test1)).toHaveProperty('average', 4);
    })

    it('should calculate the minimum', () => {
        expect(analyzeArray(test1)).toHaveProperty('min', 1);
    });

    it('should calculate the maximum', () => {
        expect(analyzeArray(test1)).toHaveProperty('max', 8);
    });

    it('should calculate the length', () => {
        expect(analyzeArray(test1)).toHaveProperty('length', 6);
    });

    it('should return null for empty arrays', () => {
        expect(analyzeArray([])).toBeNull();
    })

    it('should handle negative numbers', () => {
        expect(analyzeArray(test2)).toMatchObject({ average: -4, min: -8, max: -1, length: 6 })
    });

    it('should handle single-element arrays', () => {
        expect(analyzeArray([5])).toMatchObject({ average: 5, min: 5, max: 5, length: 1 });
    });

    it('should handle decimal values', () => {
        expect(analyzeArray([1, 2]).average).toBeCloseTo(1.5);
        expect(analyzeArray([3, 3, 4]).average).toBeCloseTo(3.3333333333333335);
    });

    it('should throw if the input is not an array', () => {
        expect(() => analyzeArray()).toThrow(TypeError);
        expect(() => analyzeArray(1)).toThrow(TypeError);
        expect(() => analyzeArray({})).toThrow(TypeError);
        expect(() => analyzeArray('foo')).toThrow(TypeError);
    });

    it('should throw if the array contains non-number elements', () => {
        expect(() => analyzeArray([1, 'a'])).toThrow(TypeError);
        expect(() => analyzeArray([null])).toThrow(TypeError);
        expect(() => analyzeArray([undefined])).toThrow(TypeError);
    })
});

