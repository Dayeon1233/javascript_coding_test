function solution(a, b) {
  let answer = "";
  //1가위 2바위 3보
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 3) {
      if (b[i] === 1) answer += "B";
      else if (b[i] === 3) answer += "D";
      else answer += "A";
      continue;
    }

    if (a[i] < b[i]) answer += "B";
    else if (a[i] === b[i]) answer += "D";
    else answer += "A";
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
