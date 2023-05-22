function solution(arr) {
  const sum = arr.reduce((accu, curr) => accu + curr, 0);
  return sum / arr.length;
}
console.log(solution([1, 2, 3, 4]));
