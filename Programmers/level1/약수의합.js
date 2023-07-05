function solution(n) {
  var answer = 0;

  let sqrt = Math.sqrt(n);
  for (let i = 1; i <= sqrt; i++) {
    if (n % i == 0) {
      if (i == sqrt) {
        answer += i;
      } else {
        answer += i;
        answer += n / i;
      }
    }
  }
  return answer;
}

function solution2(n) {
  var answer = 0;
  let i;
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      answer += i + n / i;
    }
  }
  i--;
  return i === n / i ? answer - i : answer;
}

// console.log(solution(16));

console.log(solution2(16));
//1 2 4 8 16
