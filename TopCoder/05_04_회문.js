function solution(s) {
  var i;
  for (i = s.length; ; i++) {
    var flag = true;
    let j = 0;
    while (j < s.length) {
      const idx = i - j - 1;
      //   if (j + 1 === idx) {
      //     break;
      //   }

      if (idx < s.length && s[j] !== s[idx]) {
        flag = false;
        break;
      }
      j++;
    }
    if (flag) return i;
  }
}

// console.log(solution("abab"));

// console.log(solution("abacaba"));

console.log(solution("qwerty"));
