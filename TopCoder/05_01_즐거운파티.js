function solution(first, second) {
  var answer = 0;
  var dict = {};
  for (i = 0; i < first.length; i++) {
    dict[first[i]] = 0;
    dict[second[i]] = 0;
  }
  for (i = 0; i < first.length; i++) {
    dict[first[i]] = dict[first[i]] + 1;
    dict[second[i]] = dict[second[i]] + 1;
  }

  answer = Math.max(answer, ...Object.values(dict));
  return answer;
}

// console.log(
//   solution(
//     ["fishing", "gardening", "swimming", "fishing"],
//     ["hunting", "fishing", "fishing", "biting"]
//   )
// );

console.log(
  solution(
    ["snakes", "programming", "cobra", "monty"],
    ["python", "python", "anaconda", "python"]
  )
);
