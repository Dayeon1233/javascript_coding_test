// class Sol {
// rows = 28;
// columns = 28;
//동 서 남 북

function solution(n, east, west, south, north) {
  const dr = [0, 0, 1, -1];
  const dc = [1, -1, 0, 0];

  let visit = Array.from(new Array(100), () => new Array(100).fill(false));

  const direction = [east * 0.01, west * 0.01, south * 0.01, north * 0.01];
  return dfs(50, 50, n, dr, dc, visit, direction);
}

function dfs(x, y, n, dr, dc, visit, direction) {
  if (visit[x][y]) return 0;
  if (n == 0) return 1;

  visit[x][y] = true;
  ret = 0;
  for (let i = 0; i < 4; i++) {
    ret +=
      dfs(x + dr[i], y + dc[i], n - 1, dr, dc, visit, direction) * direction[i];
  }
  visit[x][y] = false;//현재의 탐색을 종료하고 나오는 부분 따라서 다음 탐색을 하려고 마크했던 것을 제거하고 초기 상태로 돌려놓는 것

  return ret;
}
// }
// let sol = new Sol();
console.log(solution(2, 25, 25, 25, 25));
