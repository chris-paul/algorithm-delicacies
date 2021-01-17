import Queue from './index';

describe('queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('An uninitialized queue is empty and the size is 0', () => {
    expect(queue.size()).toBe(0);
    expect(queue.empty()).toBeTruthy();
  });

  test('push an item on the queue and shift it off ', () => {
    queue.push(1);
    expect(queue.shift()).toBe(1);
  });

  test('When pushing multiple distinct items on the queue, repeated shifting returns them in accord order', () => {
    queue.push(1);
    queue.push(2);
    const firstShift = queue.shift();
    expect(firstShift).toBe(1);
    const nextShift = queue.shift();
    expect(nextShift).toBe(2);
  });

  test('A queue that has items pushed and subsequently removed is empty', () => {
    queue.push(1);
    queue.shift();
    expect(queue.empty()).toBeTruthy();
  });

  test('Attempting to unshift when there are no items results in the documented type of failure', () => {
    expect(queue.shift()).toBe(undefined);
  });

  test('A queue that has an item pushed is non-empty.', () => {
    queue.push(1);
    expect(queue.empty()).toBeFalsy();
  });
});
