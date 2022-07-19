const sum = require('./script');

test('Tests if 4 + 5 = 9.', () => {
    expect(sum(4, 5)).toBe(9)
})