function solution(board) {
  let answer = 0;
  let dy = [1, 0, -1, 0];
  let dx = [0, 1, 0, -1]; //우, 하, 좌, 상
  let visited = Array.from(new Array(board.length), () =>
    new Array(board.length).fill(0)
  );
  visited[0][0] = 1;
  function dfs(x, y) {
    let nx;
    let ny;
    for (let k = 0; k < dx.length; k++) {
      nx = x + dx[k];
      ny = y + dy[k];
      if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length) {
        if (visited[nx][ny] !== 1 && board[nx][ny] === 0) {
          visited[nx][ny] = 1;
          if (nx === board.length - 1 && ny === board.length - 1) {
            answer++;
            visited[nx][ny] = 0;
          } else dfs(nx, ny);
        }
      }
    }
    if (x >= 0 && x < board.length && y >= 0 && y < board.length) {
      visited[x][y] = 0;
    }
  }
  dfs(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));

function solution2(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y) {
    if (x === 6 && y === 6) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

// console.log(solution2(arr));
