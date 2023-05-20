function solution(s) {
  var answer = "";
  //
  const numArr = s.split(" ");
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = +numArr[i];
  }
  const max = Math.max(...numArr);
  const min = Math.min(...numArr);
  answer = min + " " + max;

  return answer;
}
console.log(solution("-1 -1"));

//다른풀이2
function solution(s) {
  var arr = s.split(" ");
  arr.sort((a, b) => a - b);

  var answer = arr[0] + " " + arr[arr.length - 1];

  return answer;
}

//다른풀이3
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
