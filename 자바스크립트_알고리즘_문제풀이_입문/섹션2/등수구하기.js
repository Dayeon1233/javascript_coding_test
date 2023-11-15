function solution(arr) {
  let answer = [];

  let copyArr = Array.from(arr);
  copyArr.sort((a, b) => b - a);

  for (score of arr) {
    let idx = copyArr.indexOf(score);
    answer.push(idx + 1);
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
