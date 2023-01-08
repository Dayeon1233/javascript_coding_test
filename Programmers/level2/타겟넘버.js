function solution(numbers, target) {
  var answer = 0;
  var arr = [];

  combi(answer, arr, 0);
}
combi = (answer, arr, num) => {
  if (arr.length == numbers.length) {
    var num = arr.reduce((sum, curr) => sum + curr, 0);
    if (num == target) answer++;
    return;
  }

  if (num >= numbers.length) return;

  arr.push(numbers[num]);
  combi(answer, arr, num + 1);

  arr.pop();
  arr.push(-numbers[num]);
  combi(answer, arr, num + 1);

  return answer;
};

console.log(solution([(1, 1, 1, 1, 1)], 3));
