/*
 * @Author: 廉恒凯
 * @Date: 2021-03-23 21:06:58
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-23 21:27:36
 * @Description: file content
 */
import Graph from './index';

type nodeType = string | number;

/**
 * 广度优先遍历 使用队列
 * 根节点先入队列
 * 根节点出队列 然后根节点的没访问过相邻元素入队列
 * 继续第一步
 * @param graph
 * @param startnode
 * @returns
 */
const DFSRecursive = (graph: Graph, startnode: nodeType): nodeType[] => {
  const set = new Set();
  const result: nodeType[] = [];
  const queue = [startnode];
  set.add(startnode);
  const list = graph.getAdjList();
  while (queue.length) {
    const node = queue.shift() as nodeType;
    result.push(node);
    const arr = list.get(node) as nodeType[];
    arr.forEach((item: nodeType) => {
      if (!set.has(item)) {
        queue.push(item);
        set.add(node);
      }
    });
  }
  return result;
};

export default DFSRecursive;
