function solution(n) {
  var answer = 0;
  const str_n = n.toString();
  for (let i = 0; i < str_n.length; i++) {
    answer += Number(str_n[i]);
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

  return answer;
}

console.log(solution(987));
