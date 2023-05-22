function solution(s) {
  let j = 1;
  while (s.length > 1) {
    const i = j - 1;
    if (s[i] === s[j]) {
      s = s.replace(s[i], "");
      s = s.replace(s[j - 1], "");
      if (j > 1) j -= 1;
    } else j += 1;
  }

  if (s.length > 0) {
    return 0;
  } else return 1;
}

console.log(solution("cdcd"));
