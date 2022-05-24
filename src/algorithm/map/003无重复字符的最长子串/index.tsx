/*
 * @Author: 廉恒凯
 * @Date: 2021-03-07 21:52:35
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-24 21:10:49
 * @Description: file content
 */
const lengthOfLongestSubstring = (s: string): number => {
  // 两个滑动窗口,i就相当于右指针
  let cur = 0;
  // 循环字符串 其实就是移动滑动窗口
  let maxLen = 0;
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i += 1) {
    const strIndex = map.get(s[i]);
    if (strIndex !== undefined && strIndex >= cur) {
      cur = strIndex + 1;
    }
    maxLen = maxLen > i - cur + 1 ? maxLen : i - cur + 1;
    map.set(s[i], i);
  }
  return maxLen;
};

export default lengthOfLongestSubstring;
