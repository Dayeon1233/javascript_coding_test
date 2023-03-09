function solution(answer) {
  // var count = new Map();
  var sol = [];
  var count = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
  ]);

  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answer.length; i++) {
    if (first[i % 5] === answer[i]) {
      count.set(1, count.get(1) + 1);
    }
    if (second[i % 8] === answer[i]) {
      count.set(2, count.get(2) + 1);
    }
    if (third[i % 10] === answer[i]) {
      count.set(3, count.get(3) + 1);
    }
  }

  var tmp = [...count];
  tmp.sort((a, b) => {
    if (a[1] < b[1]) {
      return 1;
    }

    if (a[1] === b[1]) {
      return a[0] > b[0];
    }
  });
  let maxScore = tmp[0][1];
  sol.push(tmp[0][0]);
  for (let j = 1; j < 3; j++) {
    if (tmp[j][1] === maxScore) {
      sol.push(tmp[j][0]);
    }
  }

  return sol;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
