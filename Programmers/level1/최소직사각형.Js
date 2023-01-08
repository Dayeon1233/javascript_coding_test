function solution(sizes) {
  var garo = -1;
  var sero = -1;
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      tmp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = tmp;
    }
    garo = Math.max(garo, sizes[i][0]);
    sero = Math.max(sero, sizes[i][1]);
  }
  return garo * sero;
}
console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
