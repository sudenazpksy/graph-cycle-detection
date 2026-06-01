function findLongestCyclesAndIntersection(graph) {
  const visited = new Set();
  const cycles = [];

  function dfs(node, path, onPath) {
    if (onPath.has(node)) {
      
      const cycleStartIndex = path.indexOf(node);
      const cycle = path.slice(cycleStartIndex);
      cycles.push(cycle);
      return;
    }

    if (visited.has(node)) return;

    visited.add(node);
    onPath.add(node);
    path.push(node);

    const neighbors = graph[node] || [];
    for (const neighbor of neighbors) {
      dfs(neighbor, path, onPath);
    }

    path.pop();
    onPath.delete(node);
  }

  
  for (const node in graph) {
    dfs(node, [], new Set());
  }

  
  const longestCycles = {};
  for (const cycle of cycles) {
    for (const node of cycle) {
      if (
        !longestCycles[node] ||
        cycle.length > longestCycles[node].length
      ) {
        longestCycles[node] = cycle;
      }
    }
  }

  
  const allCycles = Object.values(longestCycles);
  if (allCycles.length === 0) return { longestCycles: {}, intersection: [] };

  let intersection = new Set(allCycles[0]);
  for (const cycle of allCycles.slice(1)) {
    intersection = new Set(cycle.filter((node) => intersection.has(node)));
  }

  return {
    longestCycles,
    intersection: Array.from(intersection),
  };
}


const graph = {
  A: ['B'],
  B: ['C'],
  C: ['A', 'D'],
  D: ['E'],
  E: ['F'],
  F: ['D'],
};

const result = findLongestCyclesAndIntersection(graph);
console.log('En uzun degiskenler:', result.longestCycles);
console.log('degiskenlerin kesisimi:', result.intersection);
