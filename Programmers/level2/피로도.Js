function solution(k, dungeons) {
  var answer = -1;
  numOfDungeons = dungeons.length;
  arr = [];
  combi(0, -1, k, arr);
  //n은 탐색한 던전의 갯수
}

combi = (num, answer, k, arr) => {
  if (arr.length <= 3 && arr.length > 0) {
    //   if (numOfDungeons == num-1) {
    // answer = Math.max(answer, arr.length);
    // return answer;
  }
  if (arr.length == 3) return;

  if (k >= dungeons[num][0]) {
    k -= dungeons[num][1];
    // const minusK = k - dungeons[num][1];
    const tmp = dungeons[num];
    arr.push(tmp);
    combi(num + 1);
  }
  arr.pop();

  combi(num - 1);
};
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
