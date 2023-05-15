function solution(n) {
  var answer = 0;
  const str_n = n.toString();
  for (let i = 0; i < str_n.length; i++) {
    answer += Number(str_n[i]);
  }
  return answer;
}

console.log(solution(987));
