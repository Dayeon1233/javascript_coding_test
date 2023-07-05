function solution(x, n) {
  var answer = [];
  answer.push(x);
  let sum = x;
  for (let i = 1; i < n; i++) {
    sum = sum + x;
    answer.push(sum);
  }
  return answer;
}

function solution2(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

function solution3(x, n) {
  return Array.from({ length: n }, (v, index) => (index + 1) * x);
}

console.log(solution3(-4, 2));
