import stack from './index';

describe('stack', () => {
  let arr = stack;

  afterEach(() => {
    arr = [...stack];
  });

  test('An uninitialized stack is empty', () => {
    expect(arr).toHaveLength(0);
  });

  test('push an item on the stack and pop it off ', () => {
    arr.push(1);
    expect(arr.pop()).toBe(1);
  });

  test('When pushing multiple distinct items on the stack, repeated popping returns them in reverse order', () => {
    arr.push(1);
    arr.push(2);
    const firstPop = arr.pop();
    expect(firstPop).toBe(2);
    const nextPop = arr.pop();
    expect(nextPop).toBe(1);
  });

  test('A stack that has items pushed and subsequently removed is empty', () => {
    arr.push(1);
    arr.pop();
    expect(arr).toHaveLength(0);
  });

  test('Attempting to pop when there are no items results in the documented type of failure', () => {
    expect(arr.pop()).toBe(undefined);
  });

  test('A stack that has an item pushed is non-empty.', () => {
    arr.push(1);
    expect(arr).not.toHaveLength(0);
  });
});
