/*
 * @Author: 廉恒凯
 * @Date: 2021-03-25 21:05:37
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-25 21:21:42
 * @Description: file content
 */
/**
 * 冒泡排序
 * 比较相邻的元素。如果第一个比第二个大，就交换他们两个
 * 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数；
 * 执行n- 1轮之后就可以完成排序,因为最后一个元素不需要进行比较了
 * 时间复杂度 O(n * n)
 * 空间复杂度(O(n))
 */

const bubbleSort = <T,>(arr: T[]): T[] => {
  const cloneArr = [...arr];
  // 要进行n -1 轮比较
  for (let i = 0; i < arr.length - 1; i += 1) {
    // 通过一轮循环 比较两个相邻元素 len -1 是因为取数组下标是J + 1会溢出,减i 进行i轮之后 有i个元素不用比较轮
    for (let j = 0; j < cloneArr.length - 1 - i; j += 1) {
      if (cloneArr[j] > cloneArr[j + 1]) {
        [cloneArr[j], cloneArr[j + 1]] = [cloneArr[j + 1], cloneArr[j]];
      }
    }
  }
  return cloneArr;
};

export default bubbleSort;
