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
function solution2(s) {
  var arr = s.split(" ");
  //   arr.sort((a, b) => a - b);
  arr.sort();

  var answer = arr[0] + " " + arr[arr.length - 1];

  return answer;
}
console.log(solution3("1 2 3 4"));
//다른풀이3
function solution3(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
