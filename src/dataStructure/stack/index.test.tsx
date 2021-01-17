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

  test('push an item on the stack and pop it off ', () => {
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
});
