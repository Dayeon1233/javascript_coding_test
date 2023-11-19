function solution(s, t) {
  let answer = 0;
  for (char of s) {
    if (char === t) {
      answer += 1;
    }
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
