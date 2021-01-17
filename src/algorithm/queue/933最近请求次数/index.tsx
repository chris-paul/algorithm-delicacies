/**
 * [[], [1], [100], [3001], [3002]]
 * 依次调用ping方法传入 0, 1, 100
 * 然后依次返回 0, 1, 2, 3, 3
 * 时间复杂度O(n)
 * 空间复杂复杂度O(n)
 */
import Queue from '@dataStructure/queue/index';

class RecentCounter {
  queue = new Queue<number>();

  ping(t: number): number {
    this.queue.push(t);
    // 已经push
    while (Number(this.queue.peek()) < t - 3000) {
      this.queue.shift();
    }

    return this.queue.size();
  }
}

export default RecentCounter;
