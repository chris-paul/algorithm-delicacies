/**
 * 左括号入栈,遇到右括号出栈 如果栈顶元素和右括号匹配则继续否则不合法
 * 时间复杂度 O(n)
 * 空间复杂度主要看stack的大小 O(n)
 */

const validBrackets = (str: string): boolean => {
  if (!str) return true;
  const stack: string[] = [];
  for (let i = 0; i < str.length; i += 1) {
    const brackets = str[i];
    if (brackets === '(' || brackets === '[' || brackets === '{') {
      stack.push(brackets);
    } else {
      const topEle = stack[stack.length - 1];
      if (
        (topEle === '(' && brackets === ')') ||
        (topEle === '{' && brackets === '}') ||
        (topEle === '[' && brackets === ']')
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

export default validBrackets;
