# Graph Cycle Detection & Intersection Algorithm

Yönlü bir graf üzerinde DFS (Depth-First Search) algoritması kullanarak döngüleri tespit eden ve tüm döngülerin kesişim noktalarını hesaplayan JavaScript algoritması.

## Özellikler
- DFS ile döngü tespiti
- Her düğüm için en uzun döngüyü bulma
- Tüm döngülerin kesişim noktalarını hesaplama

## Kullanım
```js
const graph = {
  A: ['B'],
  B: ['C'],
  C: ['A', 'D'],
};
const result = findLongestCyclesAndIntersection(graph);
```

## Teknoloji
JavaScript
