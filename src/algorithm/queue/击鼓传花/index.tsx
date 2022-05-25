/*
 * @Author: 廉恒凯
 * @Date: 2021-02-21 21:01:03
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-05-16 20:43:42
 * @Description: file content
 */
import CircularQueue from '@dataStructure/queue/circularQueue/index';

const passFlower = (nameList: string[], loopNum: number): string | null => {
  const nameLen = nameList.length;
  const queue = new CircularQueue<string>(nameLen);
  for (let i = 0; i < nameLen; i += 1) {
    queue.enQueue(nameList[i]);
  }

  let count = 1;
  while (queue.size() > 1) {
    if (count === loopNum) {
      queue.deQueue();
      // console.info(`${queue.deQueue()}在击鼓传花游戏中被淘汰`);
      count = 1;
    } else {
      queue.enQueue(queue.deQueue() as string);
      count += 1;
    }
  }
  return queue.peekFront();
};

export default passFlower;
