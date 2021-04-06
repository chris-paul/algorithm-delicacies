/*
 * @Author: 廉恒凯
 * @Date: 2021-03-23 21:06:58
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-03-23 21:21:19
 * @Description: file content
 */
import Graph from './index';

type nodeType = string | number;

const BFSRecursive = (graph: Graph, startnode: nodeType): nodeType[] => {
  const set = new Set();
  const result: nodeType[] = [];
  const dfs = (node: nodeType): void => {
    set.add(node);
    result.push(node);
    const list = graph.getAdjList();
    const arr = list.get(node);
    if (!arr) return;
    arr.forEach((item: nodeType) => {
      if (!set.has(item)) {
        dfs(item);
      }
    });
  };
  dfs(startnode);
  return result;
};

export default BFSRecursive;
