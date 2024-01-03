function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(new Array(n + 1), () => new Array(n + 1).fill(0));
  let check = Array.from({ length: 6 }, () => 0);

  for (v of arr) {
    graph[v[0]][v[1]] = 1;
  }
  let path = [1];
  check[1] = 1;
  dfs(1, path);

  function dfs(v, path) {
    if (v === n) {
      //   path = [];
      // check = Array.from({ length: 6 }, () => 0);
      answer++;
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (graph[v][i] === 1 && check[i] === 0) {
        check[i] = 1;
        path.push(i);
        dfs(i, path);
        path.pop();
        check[i] = 0;
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
