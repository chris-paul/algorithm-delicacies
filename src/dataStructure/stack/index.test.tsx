/*
 * @Author: 廉恒凯
 * @Date: 2021-01-10 21:28:41
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-27 21:12:12
 * @Description: file content
 */
import Stack from './index';

describe('stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('An uninitialized stack is empty and the size is 0', () => {
    expect(stack.size()).toBe(0);
    expect(stack.empty()).toBeTruthy();
  });

  test('Push an item on the stack and pop it off', () => {
    stack.push(1);
    expect(stack.pop()).toBe(1);
  });

  test('When pushing multiple distinct items on the stack, repeated popping returns them in reverse order', () => {
    stack.push(1);
    stack.push(2);
    const firstPop = stack.pop();
    expect(firstPop).toBe(2);
    const nextPop = stack.pop();
    expect(nextPop).toBe(1);
  });

  test('A stack that has items pushed and subsequently removed is empty', () => {
    stack.push(1);
    stack.pop();
    expect(stack.size()).toBe(0);
  });

  test('Attempting to pop when there are no items results in the documented type of failure', () => {
    expect(stack.pop()).toBe(undefined);
  });

  test('A stack that has an item pushed is non-empty.', () => {
    stack.push(1);
    expect(stack.size()).not.toBe(0);
  });

  test('A stack that is not empty has a length of 0 after clear.', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.empty()).toBeFalsy();
    stack.clear();
    expect(stack.size()).toBe(0);
  });

  test('A non empty stack returns a comma separated string when called toString function.', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.toString()).toBe('1,2');
  });

  test('A empty stack returns a empty string when called toString function.', () => {
    expect(stack.toString()).toBe('');
  });
});
