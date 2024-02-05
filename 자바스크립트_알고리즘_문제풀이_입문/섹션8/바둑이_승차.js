function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  function dfs(i, sum) {
    if (i === arr.length) {
      answer = Math.max(answer, sum);
      console.log("i==length, answer=", answer);
      return;
    }
    if (sum + arr[i] > c) {
      //지금까지의 sum과 다음 바둑이의 합이 c초과라면 sum만 가지고 answer을 갱신함
      answer = Math.max(answer, sum);
      console.log("sum + arr[i] > c, answer=", answer);
      return;
    } else {
      sum += arr[i];
      dfs(i + 1, sum);
      sum -= arr[i];
      dfs(i + 1, sum);
    }
  }
  dfs(0, 0);

  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
