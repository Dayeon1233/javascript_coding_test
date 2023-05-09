function solution(s, n) {
  answer = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      answer.push(" ");
    } else {
      let idx = s.charCodeAt(i) + n;
      if (90 < idx && idx < 97) {
        idx -= 90;
        idx += 64;
      }
      if (122 < idx) {
        idx -= 122;
        idx += 96;
      }
      answer.push(String.fromCharCode(idx));
    }
  }
  const ans = answer.join("");
  return ans;
}

console.log(solution("z", 1));
