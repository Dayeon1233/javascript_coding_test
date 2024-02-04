function solution(board, moves) {
  let st = [];
  let answer = 0;

  for (let m = 0; m < moves.length; m++) {
    let j = moves[m] - 1;
    let i = 0;
    if (board[board.length - 1][j] === 0) {
      continue;
    }
    while (board[i][j] === 0) {
      i++;
    }
    if (st[st.length - 1] === board[i][j]) {
      st.pop();
      answer++;
    } else {
      st.push(board[i][j]);
    }

    board[i][j] = 0;
  }

  return answer * 2;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
