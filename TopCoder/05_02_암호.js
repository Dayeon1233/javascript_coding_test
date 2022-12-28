function solution(numbers) {
  var answer = 0;
  var numCopy = numbers;
  for (i = 0; i < numbers.length; i++) {
    numCopy[i] = numCopy[i] + 1;
    const result = numCopy.reduce((total, val, idx, arr) => total * val, 1);
    console.log("리전", result);
    answer = Math.max(answer, result);
    numCopy[i] = numCopy[i] - 1;
  }
  return answer;
}

console.log(solution([1, 1, 1, 1]));

console.log(solution([1, 2, 3]));
