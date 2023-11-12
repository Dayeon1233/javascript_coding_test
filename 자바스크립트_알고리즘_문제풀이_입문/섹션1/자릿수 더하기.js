function solution(a, b, c){
  let answer = 101;
  answer = Math.min(answer,a);
  answer = Math.min(answer,b);
  answer = Math.min(answer,c);

  return answer;
}

console.log(solution(2, 5, 1));