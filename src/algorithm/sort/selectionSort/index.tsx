/*
 * @Author: 廉恒凯
 * @Date: 2021-03-25 21:22:16
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-27 19:49:40
 * @Description: file content
 */

/**
 * 选择排序
 * 在未排序序列中找到最小（大）元素，存放到排序序列的第一位 ,寻找的思路就是默认某一个为最小值然后一直找
 * 然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾
 * 以此类推 进行N -1轮
 * 时间复杂度 O(n * n)
 * 空间复杂度(O(n))
 * @param arr
 */
const selectionSort = <T,>(arr: T[]): T[] => {
  const cloneArr = [...arr];
  // 要进行n -1 轮比较
  for (let i = 0; i < cloneArr.length - 1; i += 1) {
    // 假设第一个元素最小,经过下面一轮循环找出最小值,执行到第二轮,第一个元素已经最小 不需要比较
    let minIndex = i;
    for (let j = i; j < cloneArr.length; j += 1) {
      if (cloneArr[j] < cloneArr[minIndex]) {
        minIndex = j;
      }
    }
    // 找到最小值 然后放到第一位置
    if (minIndex !== i) {
      [cloneArr[i], cloneArr[minIndex]] = [cloneArr[minIndex], cloneArr[i]];
    }
  }
  return cloneArr;
};

export default selectionSort;
