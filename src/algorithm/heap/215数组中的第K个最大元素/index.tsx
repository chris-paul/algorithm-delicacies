/* eslint-disable class-methods-use-this */
class MinHeap<T> {
  protected heap: T[];

  constructor() {
    this.heap = [];
  }

  // 获取左子节点的位置
  protected getLeftIndex(index: number): number {
    return 2 * index + 1;
  }

  // 获取右子节点的位置
  protected getRightIndex(index: number): number {
    return 2 * index + 2;
  }

  // 获取父节点的位置
  protected getParentIndex(index: number): number | undefined {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  protected swap(parentIndex: number, index: number): void {
    [this.heap[index], this.heap[parentIndex]] = [
      this.heap[parentIndex],
      this.heap[index],
    ];
  }

  protected siftUp(index: number): void {
    // 获取父节点的位置
    const parentIndex = this.getParentIndex(index);
    if (
      parentIndex !== undefined &&
      this.heap[parentIndex] > this.heap[index]
    ) {
      this.swap(parentIndex, index);
      this.siftUp(parentIndex);
    }
  }

  protected siftDown(index: number): void {
    // 获取父节点的位置
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getLeftIndex(index);
    if (leftIndex !== undefined && this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.siftDown(leftIndex);
    }

    if (rightIndex !== undefined && this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.siftDown(rightIndex);
    }
  }

  /**
   *先将元素放入堆中
   * 堆中的元素一直向前移动 直到父节点小于等于这个插入的值
   * 时间复杂度 O(lgn) n为节点的数目
   * @param value
   * @returns
   */
  insert(value: T): boolean {
    if (value != null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  /**
   * 删除堆顶元素 先用数组尾部元素替换堆顶元素,然后将
   * 新的堆顶向下移动直到子节点大于等于这个元素
   * 时间复杂度 O(lgn) n为节点的数目
   * @param value
   */
  pop(): void {
    if (this.heap.length === 0) return;
    const value = this.heap.pop();
    if (value) {
      this.heap[0] = value;
      this.siftDown(0);
    }
  }

  size(): number {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}
/**
 * O(Nlog(k))
 */
function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinHeap<number>();
  nums.forEach((num) => {
    minHeap.insert(num);
    if (minHeap.size() > k) minHeap.pop();
  });
  return minHeap.peek();
}

export default findKthLargest;
