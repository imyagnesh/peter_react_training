const sum = (a, b) => a + b;

describe('test sum function', () => {
  test('should return 3 for 2 + 1', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
