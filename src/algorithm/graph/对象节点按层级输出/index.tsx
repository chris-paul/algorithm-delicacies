/* eslint-disable no-console */
export interface Item {
  id: number;
  pid: number;
  name: string;
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
  console.info(graph);
  //   print(graph, 0);
};

const print = (graph: Graph, startId: number) => {
  const dfs = (param: [number, number]) => {
    const [id, count] = param;
    if (!graph[id]) return;
    graph[id].forEach((item) => {
      console.log(' '.repeat(count), item.name);
      dfs([item.id, count + 1]);
    });
  };
  dfs([startId, 1]);
};
const graph = transfer(source);
print(graph, 0);
