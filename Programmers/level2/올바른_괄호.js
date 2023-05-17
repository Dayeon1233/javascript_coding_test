function solution(s) {
  let bracket = [];
  //close 조건 : 팝 했을 때 ( 인 경우만 )이걸 넣을 수 있음
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") bracket.push("(");
    else if (s[i] === ")") {
      if (bracket.at(-1) === "(") {
        bracket.pop();
      } else return false;
    }
  }
  if (bracket.length > 0) {
    return false;
  }

  return true;
}
console.log(solution("(()("));
