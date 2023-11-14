function solution(s) {
  let answer = "";
  for (let char of s) {
    let num = char.charCodeAt();

    if (num >= 97 && num <= 122) {
      num -= 32;
    } else {
      num += 32;
    }
    answer += String.fromCharCode(num);
  }
  return answer;
}

console.log(solution("StuDY"));
