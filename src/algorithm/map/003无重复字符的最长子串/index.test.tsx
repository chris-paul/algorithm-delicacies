import lengthOfLongestSubstring from './index';

describe('lengthOfLongestSubstring ', () => {
  test('get right max child str', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    expect(lengthOfLongestSubstring('abcabcdea')).toBe(5);
  });
});
