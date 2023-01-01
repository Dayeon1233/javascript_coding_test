function solution(n, east, west, south, north) {
  const rows = 28;
  const columns = 28;

  const visit = Array.from(new Array(columns), () => new Array(rows).fill(0));
  const direction = [east * 0.01, west * 0.01, south * 0.01, north * 0.01];
  const i = 14;
  const j = 14;
  visit[i][j] = 1; // 첫 위치는 무조건 visit함

  flag = true;
  answer = dfs(0, 1, n, visit, direction, i, j, 0, flag);
  return answer;
}

function dfs(count, val, n, visit, direction, i, j, ans, flag) {
  if (count == n) {
    return val;
  }
  //동 서 남 북
  dr = [0, 0, 1, -1];
  dc = [1, -1, 0, 0];
  if (flag == false) {
    return ans;
  }

  for (let k = 0; k < 4; k++) {
    nextRow = i + dr[k];
    nextCol = j + dc[k];

    if (nextRow >= 0 && nextRow < 28 && nextCol >= 0 && nextCol < 28) {
      if (visit[nextRow][nextCol] != 1) {
        visit[nextRow][nextCol] = 1;
        ans += dfs(
          count + 1,
          val * direction[k],
          n,
          visit,
          direction,
          nextRow,
          nextCol,
          ans,
          flag
        );
      }
    }
  }
  // visit = Array.from(new Array(28), () => new Array(28).fill(0));
  flag = false;
  return ans;
}

console.log(solution(2, 25, 25, 25, 25));
