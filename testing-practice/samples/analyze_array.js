export default function analyzeArray(array) {
    if (!Array.isArray(array)) {
        throw TypeError('Input must be an array');
    }

    if (array.length <= 0) {
        return null;
    }

    let result = array.reduce((acc, current) => {
        if (typeof current !== 'number') {
            throw TypeError('array elements must be numbers');
        }

        acc.min = Math.min(acc.min, current);
        acc.max = Math.max(acc.max, current);
        acc.average += current;
        return acc;
    }, 
    {
        average: 0, min: array[0], max: array[0], length: array.length 
    });

    result.average /= result.length;
    return result;
}