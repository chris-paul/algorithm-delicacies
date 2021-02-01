/*
 * @Author: 廉恒凯
 * @Date: 2021-01-17 13:59:47
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-02-01 21:57:55
 * @Description: file content
 */
/**
 * [[], [1], [100], [3001], [3002]]
 * 依次调用ping方法传入 0, 1, 100
 * 然后依次返回 0, 1, 2, 3, 3
 * 时间复杂度O(n)
 * 空间复杂复杂度O(n)
 */
import Queue from '@dataStructure/queue/normalQueue/index';

class RecentCounter {
  queue = new Queue<number>();

  ping(t: number): number {
    this.queue.enqueue(t);
    // 已经push
    while (Number(this.queue.peek()) < t - 3000) {
      this.queue.dequeue();
    }

    return this.queue.size();
  }
}

export default RecentCounter;
