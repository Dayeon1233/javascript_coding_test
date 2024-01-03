function solution(s) {
  let answer = Array.from(s);
  let close = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ")") {
      answer.splice(i, 1);
      close++;
    } else if (s[i] === "(") {
      answer.splice(i, 1);
      close--;
    } else {
      if (close > 0) {
        answer.splice(i, 1);
      }
    }
  }
  return answer.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
