/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
export interface Item {
  id: number;
  pid: number;
  name: string;
  children?: Item;
}

export interface Graph {
  [key: string]: Item[];
}
const source: Item[] = [
  {
    id: 1,
    pid: 0,
    name: 'body',
  },
  {
    id: 2,
    pid: 1,
    name: 'title',
  },
  {
    id: 5,
    pid: 1,
    name: 'title',
  },
  {
    id: 3,
    pid: 2,
    name: 'div',
  },
];

const transfer = (param: Item[]) => {
  const graph: Graph = {};
  param.forEach((item) => {
    if (!graph[item.pid]) graph[item.pid] = [];
    graph[item.pid].push(item);
  });
  return graph;
};

const print = (graph: Graph, startId: number) => {
  const result = graph[startId];
  result.map((item) => {
    const queue = [item];
    while (queue.length) {
      const node = queue.shift() as any;
      const arr = graph[node.id];
      node.children = arr;
      if (arr) {
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

const graph = transfer(source);
print(graph, 0);
