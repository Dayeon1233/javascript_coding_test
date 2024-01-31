function solution(m, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    let temp = 0;
    temp += arr[i];
    let j = i + 1;
    while (temp < m) {
      temp += arr[j];
      j++;
    }
    if (temp === m) {
      answer++;
    }
  }

  return answer;
}

function solution2(m, arr) {
  let answer = 0,
    temp = 0,
    i = 0;
  temp += arr[0];

  let j = 1;

  while (j < arr.length) {
    if (temp === m) {
      answer++;
    } else if (temp > m) {
      temp -= arr[i];
      i++;
      continue;
    }
    temp += arr[j];
    j++;
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution2(6, a));
