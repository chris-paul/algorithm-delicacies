import findKthLargest from './index';

describe('findKthLargest', () => {
  test('findKthLargest return correct value', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });
});
