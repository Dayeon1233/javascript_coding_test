function solution(maze, startRow, startCol, moveRow, moveCol) {
  let q = [];
  q.push([startRow, startCol, 0]);
  mazeRowLength = maze.length;
  mazeColLength = maze[0].length;
  let visit = Array.from(new Array(50), () => new Array(50).fill(0));
  jumCount = 0;
  visit[startRow][startCol] = 1;

  for (let i = 0; i < mazeRowLength; i++) {
    for (let j = 0; j < mazeColLength; j++) {
      if (maze[i][j] === ".") {
        jumCount++;
      }
    }
  }
  jumCount--; //최초 출발점을 빼줌

  let maxCount = -1;
  while (q.length > 0) {
    [r, c, count] = q.shift();
    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < moveRow.length; i++) {
      nextRow = r + moveRow[i];
      nextCol = c + moveCol[i];

      if (
        nextRow >= 0 &&
        nextRow < mazeRowLength &&
        nextCol >= 0 &&
        nextCol < mazeColLength &&
        maze[nextRow][nextCol] === "." &&
        visit[nextRow][nextCol] == 0
      ) {
        jumCount--;
        visit[nextRow][nextCol] = 1;
        q.push([nextRow, nextCol, count + 1]);
      }
    }
  }
  if (jumCount != 0) {
    return -1;
  } else {
    return maxCount;
  }
}

console.log(
  solution(
    [".......", "X.X.X..", "XXX...X", "....X..", "X....X.", "......."],
    5,
    0,
    [1, 0, -1, 0, -2, 1],
    [0, -1, 0, 1, 3, 0]
  )
);

// console.log(solution(["..X.X.X.X.X.X."], 0, 0, [2, 0, -2, 0], [0, 2, 0, -2]));
