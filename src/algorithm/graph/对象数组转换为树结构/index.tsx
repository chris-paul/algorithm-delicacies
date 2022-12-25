/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { isDefined } from '@utils/index';

/* eslint-disable no-console */
export interface Item {
  id: number;
  pid: number;
  name: string;
  children?: Item[];
}

export interface Graph {
  [key: string]: Item[];
}

const transfer = (param: Item[]) => {
  const graph: Graph = {};
  param.forEach((item) => {
    if (!graph[item.pid]) graph[item.pid] = [];
    graph[item.pid].push(item);
  });
  return graph;
};

const arrayToTree = (graph: Graph, startId: number): Item[] => {
  const result = graph[startId];
  result.map((item) => {
    const queue = [item];
    while (queue.length) {
      const node = queue.shift() as any;
      const arr = graph[node.id] || [];
      node.children = arr;
      if (arr.length) {
        arr.forEach((child) => {
          queue.push(child);
        });
      }
    }
    console.info(JSON.stringify(item));
    return item;
  });
  return result;
};

/**
 * 使用图的方式进行 转换
 * @param data
 * @returns
 */
export const print = (data: Item[]): Item[] => {
  const transferdGraph = transfer(data);
  return arrayToTree(transferdGraph, 0);
};

export const print2 = (data: Item[]): Item[] => {
  const transferChild = (pid: number, result: Item[], data: Item[]) => {
    for (const item of data) {
      if (item.pid === pid) {
        const newItem = { ...item, children: [] };
        result.push(newItem);
        transferChild(item.id, newItem.children, data);
      }
    }
  };

  const result: Item[] = [];
  transferChild(0, result, data);
  return result;
};

export const print3 = (data: Item[]): Item[] => {
  const map: { [id: number]: Item } = {};
  for (const item of data) {
    map[item.id] = { ...item, children: [] };
  }

  const result: Item[] = [];
  for (const item of data) {
    const { pid, id } = item;
    const newItem = map[id];
    if (pid === 0) {
      result.push(newItem);
    } else {
      map[pid] = map[pid] || { children: [] };
      map[pid]?.children?.push(newItem);
    }
  }
  return result;
};
