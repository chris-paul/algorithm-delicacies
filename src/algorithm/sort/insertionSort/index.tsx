/*
 * @Author: 廉恒凯
 * @Date: 2021-03-25 21:05:37
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-25 21:50:28
 * @Description: file content
 */
/**
 * 插入排序 适合比较小型数组比冒泡和选择要好很多, 插入排序的主要优点与数据移动有关,
 * 如果某个元素位于正确的最终位置上，则它不会被移动
 * 从第一个元素开始，该元素可以认为已经被排序；
 * 取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * 如果该元素（已排序）大于新元素，将该元素移到下一位置
 *
 * 时间复杂度 O(n * n)
 * 空间复杂度(O(n))
 */

const insertionSort = <T,>(arr: T[]): T[] => {
  const cloneArr = [...arr];
  // i 从1开始 因为默认第一个已经排序轮
  for (let i = 1; i < cloneArr.length; i += 1) {
    // 拿一个没排序的 跟已经排过序的元素取比较
    const temp = cloneArr[i];
    // 已经排过序的元素的长度
    let j = i;
    while (j > 0) {
      if (temp < cloneArr[j - 1]) {
        cloneArr[j] = cloneArr[j - 1];
      } else {
        break;
      }
      j -= 1;
    }
    // 将此值插入到数组的头部
    cloneArr[j] = temp;
  }

  return cloneArr;
};

export default insertionSort;
