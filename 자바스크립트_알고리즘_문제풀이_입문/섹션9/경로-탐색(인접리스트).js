function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let check = Array.from({ length: n + 1 }, () => 0);

  for (v of arr) {
    let [a, b] = v;
    graph[a].push(b);
  }

  let path = [1];
  check[1] = 1;
  dfs(1, path);

  function dfs(v, path) {
    if (v === n) {
      answer++;
      return;
    }
    for (let i = 0; i < graph[v].length; i++) {
      if (check[graph[v][i]] === 0) {
        check[graph[v][i]] = 1;
        path.push(graph[v][i]);
        dfs(graph[v][i], path);
        path.pop();
        check[graph[v][i]] = 0;
      }
    }
  }
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
