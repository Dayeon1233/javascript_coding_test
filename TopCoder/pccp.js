function solution(maze, query) {
  var answer = [];
  var rowLength = maze.length;
  var colLength = maze[0].length;
  var alphaMap = new Map();
  var visit = Array.from(new Array(301), () => new Array(301).fill(0));
  //위,우,하,좌
  var dr = [-1, 0, 1, 0];
  var dc = [0, 1, 0, -1];

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (maze[i][j] !== "." && maze[i][j] !== "#") {
        //  alphaArr = []
        if (alphaMap.get(maze[i][j])) {
          var alphaArr = alphaMap.get(maze[i][j]);
          alphaArr.push([i, j]);
          alphaMap.set(maze[i][j], alphaArr);
        } else {
          alphaMap.set(maze[i][j], [i, j]);
        }
        // alphaArr = alphaMap.get(maze[i][j]);
        // alphaArr.push([i,j])
        // alphaMap.set(maze[i][j],alphaArr);
      }
    }
  }
  //알파벳 위치 기록

  for (let j = 0; j < query.length; j++) {
    visit = Array.from(new Array(301), () => new Array(301).fill(0));
    var elem = query[j];
    var start = elem[0];
    var end = elem[1];
    var possibleStartArr = alphaMap.get(start);

    var flag = false;
    for (let k = 0; k < possibleStartArr.length; k++) {
      var possibleAns = [];
      var x = possibleStartArr[k][0];
      var y = possibleStartArr[k][1];
      // visit[0][0]=1
      visit[x][y] = 1;
      var q = [];
      q.push(x, y, 0);

      while (!q.empty()) {
        const [x, y, count] = q.shift();
        if (maze[x][y] === end) {
          flag = true;
          possibleAns.push(count);
          break;
        }
        for (let k = 0; k < 4; k++) {
          const nextRow = x + dr[k];
          const nextCol = y + dc[k];

          if (
            nextRow < rowLength &&
            nextRow >= 0 &&
            nextCol < colLength &&
            nextCol >= 0 &&
            visit[nextRow][nextCol] !== 1 &&
            maze[nextRow][nextCol] !== "#"
          ) {
            if (maze[nextRow][nextCol] !== ".") {
              const possibleRoute = alphaMap.get(maze[nextRow][nextCol]);
              for (let t = 0; t < possibleRoute.length; t++) {
                visit[possibleRoute[t][0]][possibleRoute[t][1]] = 1;
                q.push(possibleRoute[t][0], possibleRoute[t][1], count);
              }
            } else visit[nextRow][nextCol] = 1;
            q.push(nextRow, nextCol, count + 1);
          }
        }
      } //while end
      // if(flag){
      var thisAns = Math.min(...possibleAns);
      // }
    } //for(let k = 0; k<possibleStartArr.length;k++){ end
    if (!flag) {
      answer.push(-1);
    } else answer.push(thisAns);
  }

  return answer;
}

console.log(solution("[[..A],[#.B],[.##]]", ["AB"]));
