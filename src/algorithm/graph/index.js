// const { func } = require('prop-types');

const source = [
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

// const print = (graph, startId) => {

//   const result: nodeType[] = [];
//   const queue = [startnode];
//   const list = graph.getAdjList();
//   while (queue.length) {
//     const node = queue.shift() as nodeType;
//     result.push(node);
//     const arr = list.get(node) as nodeType[];
//     arr.forEach((item: nodeType) => {
//       if (!set.has(item)) {
//         queue.push(item);
//         set.add(node);
//       }
//     });
//   }
//   return result;
// }

const print2 = (graph, startId) => {
  const result = graph[startId];
  result.map((item) => {
    const queue = [item];
    while (queue.length) {
      const node = queue.shift();
      // if(node.children) node.children = [];
      // result.push(graph[node]);
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

// let tree = [];
// const dfs = (param) => {
//   const [id, parent] = param;
//   if (!graph[id]) return;
//   graph[id].forEach((item) => {
//     if (id === startId) tree.push(item);
//     else (parent.children = parent.children || []).push(item);
//     dfs([item.id, item]);
//   });
// };
// dfs([startId, graph[startId]]);
// };

// // // 转换为:
// // tree = [{
// //   id: 1,
// //   pid: 0,
// //   name: 'body',
// //   children: [{
// //     id: 2,
// //     pid: 1,
// //     name: 'title',
// //     children: [{
// //       id: 3,
// //       pid: 1,
// //       name: 'div'
// //     }]
// //   }
// // }]

// function trasnformA(param) {
//   const map = new Map();
//   const arr = [...param];
//   const result = [];
//   param.forEach((item, index) => {
//     if (item.pid !== 0) {
//       const cache = map.get(item.pid);
//       if (cache) {
//         map.set(item.pid, [...cache, item]);
//       } else {
//         map.set(item.pid, [item]);
//       }
//       console.info(index);
//       // arr.splice(index, 1);
//     }
//   });
//   param.forEach((item, index) => {
//     const parent = map.get(item.id);
//     if (parent) {
//       item.children = parent;
//     } else {
//       result.push(item);
//     }
//   });
//   return result;
// }

// console.info(trasnformA(source));

// const list = [
//   { id: 1001, parentId: 0, name: 'AA' },
//   { id: 1002, parentId: 1001, name: 'BB' },
//   { id: 1003, parentId: 1001, name: 'CC' },
//   { id: 1004, parentId: 1003, name: 'DD' },
//   { id: 1005, parentId: 1003, name: 'EE' },
//   { id: 1006, parentId: 1002, name: 'FF' },
//   { id: 1007, parentId: 1002, name: 'GG' },
//   { id: 1008, parentId: 1004, name: 'HH' },
//   { id: 1009, parentId: 1005, name: 'II' },
// ];

// const transfer = (obj) => {
//   const graph = {};
//   list.forEach((item) => {
//     if (!graph[item.parentId]) graph[item.parentId] = [];
//     graph[item.parentId].push(item);
//   });
//   console.info(graph);
//   // print(graph, 0);
// };

const print = (graph, startId) => {
  const dfs = (param) => {
    const [id, count] = param;
    if (!graph[id]) return;
    graph[id].forEach((item) => {
      console.log(' '.repeat(count), item.name);
      dfs([item.id, count + 1]);
    });
  };
  dfs([startId, 1]);
};

// transfer(list);
const transfer = (obj) => {
  const graph = {};
  source.forEach((item) => {
    if (!graph[item.pid]) graph[item.pid] = [];
    graph[item.pid].push(item);
  });
  console.info(graph);
  print(graph, 0);
};
transfer();
