const { sum, myRemove } = require('./script');

describe('sum: ', () => {
    test('Tests if 4 + 5 = 9.', () => {
        expect(sum(4, 5)).toBe(9)
    });
    
    test('Tests if 0 + 0 = 0.', () => {
        expect(sum(0, 0)).toBe(0)
    });
    
    test('Tests if error is thrown on string.', () => {
        expect(() => {
            sum(4, '5');
        }).toThrow('parameters must be numbers')
    });
});

describe('myRemove: ', () => {
    test('Tests if [1, 2, 3, 4], 3 returns [1, 2, 3]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });
    test('Tests if [1, 2, 3, 4], 3 returns [1, 2, 3]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });
    test('Tests if [1, 2, 3, 4], 3 returns [1, 2, 3]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});