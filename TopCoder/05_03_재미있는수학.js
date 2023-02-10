function solution(base) {
  var answer = [];
  var n = 2;
  while (n < base) {
    var flag = true;
    for (let i = 0; i < base; i++) {
      for (let j = 0; j < base; j++) {
        for (let k = 0; k < base; k++) {
          var some = i * 1 + j * base + k * base * base;
          var eachPlus = i + j + k;
          if (some % n == 0 && eachPlus % n != 0) {
            var flag = false;
          }
          if (!flag) break;
        }
        if (!flag) break;
      }
      if (!flag) break;
    }
    if (flag) answer.push(n);
    n++;
  }

  return answer;
}

console.log(solution(10));

// console.log(solution([1, 2, 3]));
