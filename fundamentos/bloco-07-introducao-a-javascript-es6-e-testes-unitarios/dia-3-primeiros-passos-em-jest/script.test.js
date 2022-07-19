const sum = require('./script');

test('Tests if 4 + 5 = 9.', () => {
    expect(sum(4, 5)).toBe(9)
})

test('Tests if 0 + 0 = 0.', () => {
    expect(sum(0, 0)).toBe(0)
})